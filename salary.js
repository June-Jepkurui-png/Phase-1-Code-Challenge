function calculateNetSalary(basicSalary, benefits) {
    const TAX_RATES = [
        { lowerLimit: 0, upperLimit: 24000, rate: 0.1 },
        { lowerLimit: 24001, upperLimit: 32333, rate: 0.25 },
        { lowerLimit: 32334, upperLimit: Infinity, rate: 0.3 }
    ];
    const NHIF_RATES = [
        { lowerLimit: 0, upperLimit: 5999, deduction: 150 },
        { lowerLimit: 6000, upperLimit: 7999, deduction: 300 },
        { lowerLimit: 8000, upperLimit: 11999, deduction: 400 },
        { lowerLimit: 12000, upperLimit: 14999, deduction: 500 },
        { lowerLimit: 15000, upperLimit: 19999, deduction: 600 },
        { lowerLimit: 20000, upperLimit: 24999, deduction: 750 },
        { lowerLimit: 25000, upperLimit: 29999, deduction: 850 },
        { lowerLimit: 30000, upperLimit: 34999, deduction: 900 },
        { lowerLimit: 35000, upperLimit: 39999, deduction: 1000 },
        { lowerLimit: 40000, upperLimit: 44999, deduction: 1100 },
        { lowerLimit: 45000, upperLimit: 49999, deduction: 1200 },
        { lowerLimit: 50000, upperLimit: 59999, deduction: 1300 },
        { lowerLimit: 60000, upperLimit: Infinity, deduction: 1400 }
    ];
    const NSSF_RATE_EMPLOYEE = 0.06; 
    const grossSalary = basicSalary + benefits;

    let taxableIncome = grossSalary;
    let tax = 0;

    for (const rate of TAX_RATES) {
        if (taxableIncome <= 0) {
            break;
        }

        let taxableAmount = Math.min(rate.upperLimit, taxableIncome) - rate.lowerLimit;
        if (taxableAmount > 0) {
            tax += taxableAmount * rate.rate;
        }

        taxableIncome -= taxableAmount;
    }

    let nhifDeduction = 0;
    for (const rate of NHIF_RATES) {
        if (grossSalary >= rate.lowerLimit && grossSalary <= rate.upperLimit) {
            nhifDeduction = rate.deduction;
            break;
        }
    }

    const nssfDeduction = grossSalary * NSSF_RATE_EMPLOYEE;
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${tax.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

calculateNetSalary(50000, 10000);  
