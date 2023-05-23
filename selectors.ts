export const selector = (value: string) => {
    return {
        DataTestId: `[data-testid="${value}"]`,
        Name: `[name="${value}"]`,
        Id: `[id="${value}"]`,
        DataValue: `[data-value="${value}"]`,
        DataId: `[data-id="${value}"]`,
        RelLink: `link[rel="${value}"]`,
        DataTestIdStartWith: `[data-testid^="${value}"]`,
        DataTestIdEndingWith: `[data-testid$="${value}"]`,
        DataTestIdContains: `[data-testid*="${value}"]`,
        IdEndingWith: `[id$="${value}"]`,
        ClassContainsValue: `[class*="${value}"]`,
        Class: `[class="${value}"]`,
        HrefContainsValue: `[href*=${value}]`,
        AriaHidden: `[aria-hidden="${value}"]`,
        Type: `[type="${value}"]`,
    };
};
