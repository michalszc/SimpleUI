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

const TagsList: FC<TagsListProps> = ({ onClick, selectedOptions, tagBgColor = '#2196f3', ...props }) => (
    <Styles {...props}>
        <TagsContainer className="simpleui-select-tagslist">
            {selectedOptions?.map((elem) => 
                <Tag key={Math.random().toString(36).slice(2)} bg={tagBgColor} value={elem} onClick={() => onClick(elem)}/>
            )}
        </TagsContainer>
    </Styles>
);

export default TagsList;

const TagsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: flex-start;
    align-items: stretch;
`;
