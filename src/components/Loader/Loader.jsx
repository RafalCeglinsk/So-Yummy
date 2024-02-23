import { Puff } from "react-loader-spinner";

import { LoaderStyle } from "./Loader.styled";

export const Loader = () => {

return(


    <LoaderStyle>
<Puff
    height="110"
    width="110"
    radius="9"
    color="green"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass={{}}
  />

    </LoaderStyle>


)


};
