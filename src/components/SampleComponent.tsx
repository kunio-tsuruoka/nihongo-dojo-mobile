/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const style = css`
  color: hotpink;
  height:360px;
  font-weight: bold;
`


export const SampleComponent:React.FC = ()  => {
    return (
        <div css={style}>aaa</div>
    )
}