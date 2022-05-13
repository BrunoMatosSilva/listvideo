import { Button, Container, Details, Thumb } from "./styles";
import { AiOutlineClockCircle } from "react-icons/Ai";
import { BsFillPlayFill } from "react-icons/Bs";
import { FaTrashAlt } from "react-icons/Fa";
import { RiAddCircleLine } from "react-icons/ri";

interface VideoProps {
    addMode?: boolean;
}

export function VideoItem({ addMode = false }: VideoProps) {
    return (
        <Container>
            <Thumb imgUrl="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg" />
            <Details>
                <strong title="Meu titulo meu titulo meu titulo meu titulo">Meu titulo meu titulo meu titulo meu titulo</strong>
                <div>
                    <div>
                        {addMode ? (
                            <Button>
                                <RiAddCircleLine />
                                Add to list
                            </Button>
                        ) : (
                            <>
                                <Button>
                                    <BsFillPlayFill />
                                    Play now
                                </Button>
                                <FaTrashAlt size={12} />
                            </>
                        )}

                    </div>
                    <span>
                        <AiOutlineClockCircle />
                        15:35
                    </span>
                </div>
            </Details>
        </Container>
    );
}