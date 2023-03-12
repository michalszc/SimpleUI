import React, { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { OptionProps } from "./Option";
import OptionsList from './OptionsList';
import { BaseProps } from "../../utils";
import InputContainer from "./InputContainer";

export interface SelectProps extends StyleProps, BaseProps{
    /**
     * Text display when input section is empty
     */
    placeholder?: string;
    /**
     * selected option     
     * */
    selected?: string;
    /**
     * activated everytime the component is rendered
     */
    onChange: (v: string) => void;
    /**
     * component's children, should be Option components
     */
    children: React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}

const SingleSelect: FC<SelectProps> = ({ onChange, selected = "", placeholder, children,  ...props }) => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [input, setInput] = useState<string>(selected);
    const [selectedOption, setSelectedOption] = useState<string>(selected);
    const [show, setShow] = useState<boolean>(false);

    const showCross = useMemo(
       () => searchInput.length !== 0 || selectedOption.length !== 0
    , [searchInput, selectedOption]);

    useEffect(() => {
        onChange(selectedOption);
    }, [selectedOption]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInput(event.target.value);
        setSearchInput(event.target.value);
    };

    const resetInput = () => {
        setSearchInput("");
        setInput("");
        deleteSelectedOption();
    };

    const checkIfSelected = (elem: string):boolean => {
        const isSelected = selectedOption === elem ? true : false;

        return isSelected;
    };

    const deleteSelectedOption = () => {
        setSelectedOption("");
    };

    const addSelectedOption = (elem: string) => {
        setSelectedOption(elem);
        setInput(elem);
        setSearchInput("");
    };

    const changeSelectedOptions = (elem: string) => {
        if (checkIfSelected(elem)) {
            deleteSelectedOption();
        } 
        else {
            addSelectedOption(elem);
        }
        setShow(v => !v);
    };

    return(
        <Styles {...props}>
            <MainContainer>

                <InputContainer 
                    onChange={handleChange}
                    onFocus={() => setShow(true)}
                    placeholder={placeholder}
                    input={input}
                    resetInput={resetInput}
                    isCrossVisible={showCross}
                    isArrowVisible={show}
                    onArrowClick={() => setShow(v => !v)}
                />

                {show && 
                    <OptionsList 
                        updateSelectedOptionsFunction={changeSelectedOptions}
                        checkIfSelectedFunction={checkIfSelected}
                        children={children}
                        searchInput={searchInput}
                    />
                }
            </MainContainer>
        </Styles>
    );
};

export default SingleSelect;

const MainContainer = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: .3px solid ${ ({ theme }) =>  theme.colors.grey[500] };
    border-radius: ${ ({ theme }) => theme.sizes[2]};
    flex-direction: column;
    min-width: 300px;
    width: fit-content;
    box-sizing: border-box;
    background-color: transparent;
    height: auto;
    z-index: 10;
`;
