export { default } from './Select';
import { Option } from '../../utils/types/option';

export const checkIfSelected = (selectedOptions:Option[], elem: Option):boolean => {
    const e = selectedOptions.filter((item) => {
       return elem.index === item.index;
    });

    if (e.length === 0 ) {
        return false;
    }

    return true;
};

export const deleteSelectedOption = (selectedOptions:Option[],elem: Option) => {
    return(
        selectedOptions?.filter((item: Option) => { 
            return item.index !== elem.index;
        })
    );
};

export const addSelectedOption = (selectedOptions:Option[], elem: Option) => {
    return([...selectedOptions, elem]);
};

export const changeSelectedOptions = (multi: boolean, selectedOptions:Option[], elem: Option) => {
    if (checkIfSelected(selectedOptions, elem)) {
        return deleteSelectedOption(selectedOptions, elem);
    } 
    else {
        if(!multi) {
            return([elem]);
        }
        else{
            return addSelectedOption(selectedOptions, elem);
        }
    }
};
