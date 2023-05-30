

validateEntries = function (which) {
    let count = 0;
    for (let i = 0; i < Grades.length-1; i++) {
        let elem = document.getElementById(Grades[i][0]).value;
        let regex = /^(\d*)(\.?)(\d+)$/;
        if (regex.test(elem) && elem>0 && elem<100.001) {
            let target = "error_";
            target = target.concat(Grades[i][0]);
            document.getElementById(target).style.display = "none";
        } else {
            let target = "error_";
            target = target.concat(Grades[i][0]);
            document.getElementById(target).style.display = "block";
            document.getElementById("goal").value = 0;
            document.getElementsByTagName("p")[0].style.display = "none";
            document.getElementsByTagName("p")[1].style.display = "none";
            count += 1;
        };        
    }
    if (count == 0) {
        calcFinal (which);
    };
};


calcFinal = function (which) {
    
    
    let culmGr = 0;

    for (let i = 0; i < Grades.length-1; i++) {
        console.log(document.getElementById(Grades[i][0]).value);
        console.log(Grades[i][1]);
        culmGr += document.getElementById(Grades[i][0]).value*Grades[i][1];
        console.log("culmGr = " + culmGr);

    } 

    let grCurr = 0;

    switch (which) {
        case 1:
            console.log("year calc");
            for (let i = 0; i < Grades.length-3; i++) {
                grCurr += document.getElementById(Grades[i][0]).value*Grades[i][1];
            }
            for (let i = Grades.length-3; i < Grades.length-1; i++) {
                grCurr += document.getElementById(Grades[i][0]).value*0.25;
                console.log("grCurr = " + grCurr);
            };
            break;
        case 2:
            console.log("semester calc");
            for (let i = 0; i < Grades.length-1; i++) {
                grCurr += document.getElementById(Grades[i][0]).value*0.5;
                console.log("grCurr = " + grCurr);
            };
            break;
    };
    grCurr = grCurr.toFixed(2);

    let val = Number(document.getElementById("goal").value);
    let lastIndex = Grades.length-1;
    console.log(val);
    let lowest = "F";

    if (culmGr >= 89.5) {
        lowest = "an A";
    } else if (culmGr >= 79.5) {
        lowest = "a B";
    } else if (culmGr >= 69.5) {
        lowest = "a C";
    } else if (culmGr >= 59.5) {
        lowest = "a D";
    } else if (culmGr >= 39.5) {
        lowest = "an E";
    };
    switch (val) {
        case 0:
            break;
        case 1:
            final = (89.5-culmGr)/Grades[lastIndex][1];
            break;
        case 2:
            final = (79.5-culmGr)/Grades[lastIndex][1];
            break;
        case 3:
            final = (69.5-culmGr)/Grades[lastIndex][1];
            break;
        case 4:
            final = (59.5-culmGr)/Grades[lastIndex][1];
            break;
        case 5:
            final = (39.5-culmGr)/Grades[lastIndex][1];
    };
    final = Number(final).toFixed(2);
    
    document.getElementById("grOverall").style.display = "block";
    document.getElementById("scoreFinal").style.display = "block";
    document.getElementById("grade_current").innerHTML = grCurr;
    document.getElementById("se").innerHTML = final;
    if (final < 0) {
        document.getElementById("comment").innerHTML = "! You cannot possibly get less than " + lowest + ".";
    } else if (final > 100) {
        document.getElementById("comment").innerHTML = ". Sorry, it is not possible for you to finish with this grade.";
    } else {
        document.getElementById("comment").innerHTML = ".";

    };
};

changeExempt = function () {
    if (document.getElementById("se1_exempt").checked) {
        document.getElementById("se1").disabled=true;
        document.getElementById("se1").value="";
        document.getElementById("error_se1").style.display="none";
        Grades[0][1]=0.25;
        Grades[1][1]=0.25;
        Grades.splice(2,1);
        console.log(Grades);
    } else {
        document.getElementById("se1").disabled=false;
        Grades[0][1]=0.2;
        Grades[1][1]=0.2;
        Grades.splice(2,0,["se1",0.1]);
        console.log(Grades);
    };
};





