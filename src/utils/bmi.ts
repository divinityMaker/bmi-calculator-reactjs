export interface LevelsTypes {
    title: string;
    color: string;
    icon: 'up' | 'down';
    bmi: number[];
    yourBmi?: number;
}

export const levels: LevelsTypes[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', bmi: [0, 18.59] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', bmi: [18.6, 24.99] },
    { title: 'Sobrepeso', color: '#E2B036', icon: 'down', bmi: [25, 30.99] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', bmi: [31.1, 99] }
]

export const calculateBmi = (height: number, weight: number): LevelsTypes | null => {
    const bmi = weight / (height * height);
    for (let i in levels) {
        if (bmi >= levels[i].bmi[0] && bmi < levels[i].bmi[1]) {
            let tmpLevel = { ...levels[i] }
            tmpLevel.yourBmi = parseFloat(bmi.toFixed(2));
            return tmpLevel;
        }
    }
    return null;
}