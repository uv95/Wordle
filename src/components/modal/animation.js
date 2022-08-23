import { keyframes } from "styled-components";

export const open = keyframes`
0%{
  transform: translateY(5%);
  opacity: 0;
}
100%{
  transform: translateY(0%);
  opacity: 1
}
`;
export const close = keyframes`
0%{
  transform: translateY(0%);
  opacity: 1
}
100%{
  transform: translateY(5%);
  opacity: 0;
}
`;

export const increase = keyframes`
0% {
    transform: scale(1);
}
20% {
    transform: scale(1.5);
    background: var(--color-green);

}

70% {
    transform: scale(1);

}
`;
