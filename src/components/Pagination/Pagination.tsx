import { ChangeEvent } from "react";
import styled from "styled-components";
import { Shape, Variant } from "../../shared";
import React from "react";
import WaveEffect from "../WaveEffect/WaveEffect";
import { Flex } from "../Flex";
import { PaginationContainerProps, PaginationProps } from "./Pagination.types";

// const range = (start: number, end: number) => {
//    return [...Array(end).keys()].map((el: number) => el + start)
// }

const PaginationContainer = styled.ul<PaginationContainerProps>`
  ${({
    theme,
    $shape = "circle",
    $fixedSize,
    $fill = true,
    $variant = "success",
    $active,
  }) => `
 margin: -${theme.pagination.margin.y} -${theme.pagination.margin.x};
`}
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

type PaginationItem = {
  $active?: boolean;
  disabled?: boolean;
  $variant?: Variant;
  $fill?: boolean;
  $shape?: Shape;
  $fixedSize?: boolean;
};
const PaginationItem = styled.li<PaginationItem>`
  flex: 0 0 auto;
  padding: 0;
  display: inline-flex;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;

  ${({
    $active,
    theme,
    disabled,
    $variant = "success",
    $fill = true,
    $shape = "rounded",
    $fixedSize,
  }) => `

   ${
     $fixedSize
       ? `
                justify-content: center;
                align-items: center;
                width: ${theme.pagination.fixedSize};
                height: ${theme.pagination.fixedSize};
            `
       : `
                padding: ${theme.pagination.padding.y} ${theme.pagination.padding.x};
            `
   }
                    ${
                      $fill
                        ? `
                border-color: ${theme.variant[$variant].dark};
                background: ${theme.variant[$variant].main};
                color: ${theme.variant[$variant].font};
                fill: ${theme.variant[$variant].font};
        
                &:hover{
                  border-color: ${theme.variant[$variant].darkest};
                  background: ${theme.variant[$variant].dark};  
                }
                  ${
                    $active
                      ? `
                  border-color: ${theme.variant[$variant].darkest};
                  background: ${theme.variant[$variant].dark};
               `
                      : ``
                  }
               `
                        : `
                border-color: transparent;
                background: ${theme?.variant[$variant]?.pagination?.background};
                color: ${theme?.colors?.primary};
                fill: ${theme.variant[$variant]?.pagination?.font};
        
                &:hover {
                  background: ${theme.variant[$variant]?.pagination?.border};
                }
                 ${
                   $active
                     ? `
                  border-color: ${theme.variant[$variant].dark};
                  background: ${theme.variant[$variant].main} !important;
                  color: ${theme.variant[$variant].font};
                  fill: ${theme.variant[$variant].font};    
                  `
                     : ``
                 } 
        
            
            `
                    }

            margin: ${theme.pagination.margin.y} ${theme.pagination.margin.x};
            border-radius: ${theme.pagination.radius[$shape]};
            transition: ${theme.pagination.transition};
            transition-property: border, background, color, fill;
            ${
              disabled
                ? `
            opacity:0.7;
            background:${theme?.variant[$variant]?.form?.disabledBackgroundColor}
            cursor: default;
            user-select: none;   
            pointer-events: none;

`
                : ``
            }
`}// height:30px;
// text-align:center;
// justify-content:center;
// align-items:center;
// display:inline-flex;
// cursor:pointer;
// &:first-child{
//    border-top-left-radius:3px;
//    border-bottom-left-radius:3px;

// }
// &:last-child{
//    border-top-right-radius:3px;
//    border-bottom-right-radius:3px;

// }
`;

const limitOptions = [
  {
    label: "10 / page",
    value: 10,
  },
  {
    label: "20 / page",
    value: 20,
  },
  {
    label: "50 / page",
    value: 50,
  },
  {
    label: "100 / page",
    value: 100,
  },
];

const StyledSelect = styled.select<PaginationItem>`
  width: 100%;
  height: 100%;
  font-weight: 500;
  outline: none;
  font-size: 15px;
  ${({ theme, $variant = "primary", $fill = true, $fixedSize }) => `
height: ${theme.pagination.fixedSize};
 ${
   $fixedSize
     ? `
                justify-content: center;
                align-items: center;
               //  width: ${theme.pagination.fixedSize};
                height: ${theme.pagination.fixedSize};
            `
     : `
                padding: ${theme.pagination.padding.y} ${theme.pagination.padding.x};
            `
 }
   ${
     $fill
       ? `
                border-color: ${theme.variant[$variant].dark};
                background: ${theme.variant[$variant].main};
                color: ${theme.variant[$variant].font};
                fill: ${theme.variant[$variant].font};
                &:hover{
                  border-color: ${theme.variant[$variant].darkest};
                  background: ${theme.variant[$variant].dark};  
                }
               
      }
               `
       : `
                border-color: transparent;
                background: ${theme?.variant[$variant]?.pagination?.background};
                color: ${theme.variant[$variant]?.pagination?.font};
                fill: ${theme.variant[$variant]?.pagination?.font};
        
                &:hover {
                  background: ${theme.variant[$variant]?.pagination?.border};
                }
                
        
            
            `
   }

            border-radius:  ${theme.pagination.radius["rounded"]}
         
`}
`;

export const Pagination: React.FC<PaginationProps> = ({
  total,
  limit = 10,
  page,
  onPageChange,
  hideNextButton,
  hidePrevButton,
  maxPage = 5,
  hideFirstButton,
  hideLastButton,
  hideLimitOptions = true,
  ...props
}) => {
  const pageCount = Math.ceil(total / limit);
  const firstPage = 1;

  const onPrevButtonClick = (e: any) => {
    onPageChange(e, page - 1);
  };
  const onNextButtonClick = (e: any) => {
    onPageChange(e, page + 1);
  };
  const onPageButtonClick = (clickedItem: number) => (e: any) => {
    onPageChange(e, clickedItem);
  };

  let firstVisiblePage = Math.max(
    page - Math.floor((maxPage - 1) / 2),
    firstPage
  );
  const lastVisiblePage = Math.min(firstVisiblePage - 1 + maxPage, pageCount);
  firstVisiblePage = Math.max(lastVisiblePage + 1 - maxPage, firstPage);

  return (
    <PaginationContainer>
      {hidePrevButton ? null : (
        <WaveEffect>
          <PaginationItem
            {...props}
            disabled={page === 1}
            onClick={onPrevButtonClick}
            $active={false}
          >
            {props.$fixedSize ? "<" : "prev"}
          </PaginationItem>
        </WaveEffect>
      )}
      {hideFirstButton ? null : (
        <WaveEffect>
          <PaginationItem
            {...props}
            onClick={(e: any) => onPageChange(e, firstPage)}
            $active={false}
          >
            {"| <"}
          </PaginationItem>
        </WaveEffect>
      )}

      {Array(lastVisiblePage - firstVisiblePage + 1)
        .fill(lastVisiblePage - firstVisiblePage + 1)
        .map((v, i) => (
          <WaveEffect key={i}>
            <PaginationItem
              {...props}
              $active={i + firstVisiblePage === page}
              onClick={onPageButtonClick(i + firstVisiblePage)}
            >
              {i + firstVisiblePage}
            </PaginationItem>
          </WaveEffect>
        ))}
      {hideLastButton ? null : (
        <PaginationItem
          {...props}
          onClick={(e: any) => onPageChange(e, pageCount)}
          $active={false}
        >
          {"> |"}
        </PaginationItem>
      )}
      {hideNextButton ? null : (
        <PaginationItem
          {...props}
          disabled={page === pageCount}
          onClick={onNextButtonClick}
          $active={false}
        >
          {props?.$fixedSize ? ">" : "Next"}
        </PaginationItem>
      )}
      {hideLimitOptions ? null : (
        <Flex ml={3} width={100} alignItems="center" justifyContent="center">
          {/* <Select options={limitOptions} menuPosition="fixed" placeholder='5' isClearable={false} defaultValue={{ value: limit, label: limit }} /> */}
          <StyledSelect {...props} placeholder="5" defaultValue={limit}>
            {limitOptions.map((option, index) => (
              <option value={option.value}>{option?.label}</option>
            ))}
          </StyledSelect>
        </Flex>
      )}
    </PaginationContainer>
  );
};
