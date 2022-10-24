const isMinor = (age: number) => age < 18;


export const handler = async (object: { name: string; age: number }) => {
    const { name, age } = object;
    // run initial function to get data used in policies and construct the object 
    for (const iterator of policyStructure[isMinor(age) ? 'minor' : 'adult']) {
        const { result, message } = await iterator(policyArgs);
        if (!result) {
            return { result, message };
        }
    }
    return { result: true }
}



const policy1 = async ({ id }: { id: number })  => {
    console.info('policy1', id);
    if (id)
        return { result: true, message: '' };
    return { result: false, message: 'policy1 failed' };
};
const policy2 = async ({ name }: { name: string }) => {
    console.info('policy2', name);
    if (name)
        return { result: true, message: '' };
    return { result: false, message: 'policy2 failed' };
};
const policy3 = async () => {
    console.info('policy3');
    if (Math.random() > 0.5)
        return { result: true, message: '' };
    return { result: false, message: 'policy3 failed' };
};
const policy4 = async () => {
    console.info('policy4');
    if (Math.random() > 0.5)
        return { result: true, message: '' };
    return { result: false, message: 'policy4 failed' };
};
const policy5 = async () => {
    console.info('policy5');
    if (Math.random() > 0.5)
        return { result: true, message: '' };
    return { result: false, message: 'policy5 failed' };
};
const policy6 = async () => {
    console.info('policy6');
    if (Math.random() > 0.5)
        return { result: true, message: '' };
    return { result: false, message: 'policy6 failed' };
};
const policy7 = async () => {
    console.info('policy7');
    if (Math.random() > 0.5)
        return { result: true, message: '' };
    return { result: false, message: 'policy7 failed' };
};


const policyArgs = {
    name: 'John',
    id: 1,
    age: 20,
}
// const policyArgs = {
//     policy0: [policy1, policy2],
//     policy1: [],
// }
const policyStructure = {
    minor: [policy1, policy2],
    adult: [policy4, policy5, policy6, policy7]
}




// const policy0 = async (...rest) =>  {
//     if (rest.length > 0) 
//         for (const iterator of rest) {
//             const {result, message} = await iterator();
//             console.log('Inner policy', result, message)
//             if (!result) {
//                 return {result, message};
//             }
//         } 
//     console.log('policy0');
//     if (Math.random() > 0.5)
//         return {result: true, message: ''};
//     return {result: false, message: 'policy0 failed'};
// };