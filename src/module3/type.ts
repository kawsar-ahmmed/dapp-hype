function asKeliGram(params: string | number): string | number | undefined{

    if (typeof params === 'string') {
        const value = parseFloat(params) * 1000
        return ` The converted number is: ${value}`
    }
    if (typeof params === 'number'){
        const value = params * 1000
        return value
    }
} 

const newNumber = asKeliGram(10) as number;
const onlyNumber = asKeliGram('10') as string;