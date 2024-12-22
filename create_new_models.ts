import * as fs from 'fs';

async function secureFetch(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', url);
    }
}

async function mergeAndSave(newData: object, filePath: string, app: string, profile: string) {
    let existingData = {};
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        existingData = JSON.parse(fileContent);
    }
    profile = profile ?? 'default';
    const diffFilePath = filePath.replace('.json', `_${app}_${profile}_diff.json`);

    if (!fs.existsSync(diffFilePath) && newData) {

        var difference =
            calcDiff(existingData, newData);
        // Save the difference
        if (difference) {
            fs.writeFileSync(diffFilePath, JSON.stringify(difference, null, 2));
        }
        // Merge and save the data
        const mergedData = { ...existingData, ...newData };
        fs.writeFileSync(filePath, JSON.stringify(mergedData, null, 2));
    }
}

function appendToFile(newData: object, filePath: string) {
    let existingData: any = [];
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        existingData = JSON.parse(fileContent);
    }
    const dataSet = new Set(existingData);
    dataSet.add(newData);
    const distinctData = Array.from(dataSet);
    fs.writeFileSync(filePath, JSON.stringify(distinctData, null, 2));
}

function calcDiff(existingData: any, newData: any): any {
    let diff: any = {};
    for (const key in newData) {
        if (!Object.prototype.hasOwnProperty.call(newData, key)) continue;
        if (typeof newData[key] === 'object' && newData[key] !== null) {
            const nestedDiff = calcDiff(existingData[key] || {}, newData[key]);
            if (Object.keys(nestedDiff).length > 0) {
                diff[key] = nestedDiff;
            }
        } else if (newData[key] !== existingData[key]) {
            diff[key] = newData[key];
        }
    }
    return diff;
}

// Example usage
for (let i = 201; i <= 230; ++i) {

    const baseUrl = `http://192.168.1.${i}`
    await secureFetch(`${baseUrl}/shelly`).then(async data => {

        const type = data?.app;
        const profile = data?.profile;
        if (type) appendToFile(type, 'shelly-types.json')

        await secureFetch(`${baseUrl}/rpc/Shelly.GetConfig`)
            .then(async config => await mergeAndSave(config, 'shelly-config.json', type, profile));

        await secureFetch(`${baseUrl}/rpc/Shelly.GetStatus`)
            .then(async status => await mergeAndSave(status, 'shelly-status.json', type, profile));
    });
}