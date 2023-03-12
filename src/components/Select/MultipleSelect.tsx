import React, { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import { OptionProps } from "./Option";
import type * as CSS from "csstype";
import TagsList from "./TagsList";
import OptionsList from "./OptionsList";
import { Colors } from "../../constants";
import { BaseProps } from "../../utils";
import InputContainer from "./InputContainer";

export interface SelectProps extends StyleProps, BaseProps {
    /**
     * activated everytime the component is rendered
     */
    onChange: (v: string[]) => void;
    /**
     * Text display when input section is empty
     */
    placeholder?: string;
    /**
     * array of selected options
     */
    selected?: Array<string>;
    /**
     * costum bg color for tags
     */
    tagBgColor?: CSS.DataType.Color;
    /**
     * component's children, should be Option components
     */
    children: React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}

const MultipleSelect: FC<SelectProps> = ({ 
    tagBgColor = Colors.blue[400], 
    selected = [], onChange, 
    children, placeholder, ...props }) => {
    
    const [show, setShow] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string>("");
    const [selectedOptions, setSelectedOptions] = useState<string[]>(selected);

    useEffect(() => {
        onChange(selectedOptions);
    }, [selectedOptions]);

    const showCross = useMemo(
        () => searchInput.length !== 0
     , [searchInput]);
 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    };

    const resetInput = () => {
        setSearchInput("");
    };

    //useCallback
    const checkIfSelected = (elem: string):boolean => {
        const e = selectedOptions.filter((item) => {
           return elem === item;
        });
    
        if (e.length === 0 ) {
            return false;
        }
    
        return true;
    };

    const deleteSelectedOption = (elem: string) => {
        setSelectedOptions(selectedOptions?.filter((item: string) => { 
            return item !== elem;
        }));
    };

    const addSelectedOption = (elem: string) => {
        setSelectedOptions((selected) => [...selected, elem]);
    };

    const changeSelectedOptions = (elem: string) => {
        if (checkIfSelected(elem)) {
            deleteSelectedOption(elem);
        } 
        else {
            addSelectedOption(elem);
        }
        setShow(false);
    };

    return(
        <Styles {...props}>
            <MainContainer>
                <SearchContainer className="simpleui-select">
                    { selectedOptions.length !== 0 && 
                        <TagsList 
                            onClick={deleteSelectedOption} 
                            tagBgColor={tagBgColor} 
                            selectedOptions={selectedOptions}
                        />
                    }
                    
                    <InputContainer 
                        onChange={handleChange}
                        onFocus={() => setShow(true)}
                        placeholder={placeholder}
                        input={searchInput}
                        resetInput={resetInput}
                        isCrossVisible={showCross}
                        isArrowVisible={show}
                        onArrowClick={() => setShow(v => !v)}
                    />

                </SearchContainer>

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

export default MultipleSelect;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    border: .3px solid #a8a8a8;
    border-radius: 5px;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    z-index: 10;
`;

const SearchContainer = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: fit-content;
    padding: 5px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-inline: auto;
    border-radius: 10px;
`;
