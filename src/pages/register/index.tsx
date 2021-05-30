import {FiArrowLeft, FiMail, FiLogIn, FiLock, FiUser} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useForm }from 'react-hook-form';
import { Button } from '../../components/button';
import {Container, Content,FormContainer , InputContainer, Background, Error} from './styles';
interface FormData {
    name: string;
    email: string;
    password: string;   
}

export function Register(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu cadastro</h2>
                    <form onSubmit={onSubmit}>
                    <InputContainer>
                            <FiUser size={40}/>
                            <input 
                                type="text"
                                placeholder="Nome"
                                {...register('name', {required:true})}
                            />
                        </InputContainer>
                        {errors.name && <Error>Preenchimento obrigatório</Error>}
                        <InputContainer>
                            <FiMail size={40}/>
                            <input 
                                type="email"
                                placeholder="E-mail"
                                {...register('email', {required:true})}
                            />
                        </InputContainer>
                        {errors.email && <Error>Preenchimento obrigatório</Error>}
                        <InputContainer>
                            <FiLock size={40}/>
                            <input 
                                type="paassword"
                                placeholder="Senha"
                                {...register('password', {required:true})}
                            />
                        </InputContainer>
                        {errors.password && <Error>Preenchimento obrigatório</Error>}
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <Link to='/'>
                        <FiArrowLeft size={40}/>
                        voltar para login
                    </Link>
                </FormContainer>
            </Content>
            <Background/>
        </Container>
    )
}