function KeyGen(i) {
    return `${new Date().getTime()}_${String.fromCharCode(i + 65)}`;
}

export default KeyGen;