import {FC, ReactNode} from 'react';

type Props = {
  bg: 'red' | 'green';
  children?: ReactNode;
};

export const Button: FC<Props> = ({bg, children}) => (
  <button style={{backgroundColor: bg}}>{children}</button>
);
