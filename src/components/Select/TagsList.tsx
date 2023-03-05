import React, { FC } from "react";
import styled from "styled-components";
import Styles, { StyleProps } from "../../utils/styles";
import type * as CSS from "csstype";
import Tag from "./Tag";

export interface TagsListProps extends StyleProps {
    /**
     * selected options
     */
    selectedOptions?: Array<string>;
    /**
     * tag's color
     */
    tagBgColor?:  CSS.DataType.Color;
    /**
     * onClick event handler, fired when 'x' icon is clicked
     */
    onClick: (v: string) => void;
}

const TagsList: FC<TagsListProps> = ({ onClick, selectedOptions, tagBgColor, ...props }) => {
    const tagColor = tagBgColor !== undefined ? tagBgColor : '#2196f3';

    return(
        <Styles {...props}>
            <StyledTagsContainer className="simpleui-select-tagslist">
                {selectedOptions?.map((elem) => 
                    <Tag bg={tagColor} value={elem} onClick={() => onClick(elem)}/>
                )}
            </StyledTagsContainer>
        </Styles>
    );
};

export default TagsList;

const StyledTagsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    justify-content: flex-start;
    align-items: stretch;
`;
