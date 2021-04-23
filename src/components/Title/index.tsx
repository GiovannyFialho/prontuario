import { Wrapper } from "./styles";

export type TitleProps = {
    children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => <Wrapper>{children}</Wrapper>;

export default Title;
