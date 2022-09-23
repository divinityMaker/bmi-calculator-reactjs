export interface LevelsTypes {
    title: string;
    color: string;
    icon: 'up' | 'down';
    bmi: number[];
    yourBmi?: number;
}

export const levels: LevelsTypes[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', bmi: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', bmi: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B036', icon: 'down', bmi: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', bmi: [31.1, 99] }
]

export const calculateBmi = (height: number, weight: number): LevelsTypes | null => {
    const bmi = weight / (height * height);
    for (let i in levels) {
        if (bmi >= levels[i].bmi[0] && bmi < levels[i].bmi[1]) {
            levels[i].yourBmi = bmi;
            return levels[i];
        }
    }
    return null;
}