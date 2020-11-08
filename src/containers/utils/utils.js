export const getElementWidth = (element) => {
    const styles = getComputedStyle(element, null)
    const elementsDimension = {
        sizes: {
            marginLeft: parseInt(styles.marginLeft) || 0,
            marginRight: parseInt(styles.marginRight) || 0,
            width: element.getBoundingClientRect().width,
        },
    }
    let fullWidth = 0
    for (let key in elementsDimension.sizes) {
        fullWidth += elementsDimension.sizes[key]
    }

    return fullWidth
}
