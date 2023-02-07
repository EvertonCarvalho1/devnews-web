import styled from 'styled-components';

export const Container = styled.div`
.main{
  width: 100%;
}
.card{
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  padding: 10px;
}
.center-div{
  display: flex;
  justify-content: center;
}

.title{
  color: black;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 25px;
}

.subtitle{
  font-size: 17px;
  padding-bottom: 5px;
  text-align: center;
  line-height: 22px;
}

.content{
  padding: 10px;
  font-size: 15px;
  text-align: justify;
  line-height: 22px;

}
`;