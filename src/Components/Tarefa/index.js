import { Container } from './styles';

interface TarefaProps {
  children: ReactNode;
}

function Tarefa({ children }: TarefaProps) {
  return (
    <Container>
      <h1>Tarefa</h1>
      {children}
    </Container>
  );
};

export default Tarefa;
