export const getElementWidth = (element) => {
    let fullWidth = 0
    if (element) {
        const styles = getComputedStyle(element, null)
        const elementsDimension = {
            sizes: {
                marginLeft: parseInt(styles.marginLeft) || 0,
                marginRight: parseInt(styles.marginRight) || 0,
                width: element.getBoundingClientRect().width,
            },
        }

        for (let key in elementsDimension.sizes) {
            fullWidth += elementsDimension.sizes[key]
        }
    }

    return fullWidth
}

export const validateTextField = (textVal, touched, min, max) => {
    return textVal.length > min && textVal.length < max && touched
}

export const validateDateField = (val, touched) => {
    const checkToBig =
        parseInt(val.split('-')[0]) <= new Date().getFullYear() + 5 // today year + 5
    const checkToSmall =
        new Date().getTime() + 86400000 < new Date(val).getTime() //  todayTimestamp + 24hrs = user needs to pick up date 2 days ahead

    return touched && checkToBig && checkToSmall
}
