function steps(n) {
    for (let i = 0; i < n; i++) {
        let mysteps = ' ';
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                mysteps += "#";
            }
        }
        console.log(mysteps);
    }
}
steps(4);