import { ActivyTable } from '../../components/activyTable';
import { Summary } from '../../components/summary';
import {Container} from './styles';

export function Dashboard(){
    return (
        <>
            <header/>
            <Container>
                <Summary/>
                <ActivyTable/>
            </Container>
        </>
    )
}
