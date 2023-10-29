import styled from "styled-components";

const HYbutton = styled.button`
 border:1px solid red;
 border-radius:5px
`

export const HYbuttonWrapper = styled(HYbutton)`
background-color: #0f0;
color:#fff;
`

export const HomeWrapper = styled.div`
.top{
  .banner{
    color:red;
  }
}
.bottom{
  .header{
    color:${props => props.theme.color};
    font-size:${props => props.theme.size};
  }
  .product-list{
    .item{
      color:blue;
    }
  }
}
`