import {Button, Container, Grid} from "@mui/material";
import ButtonModal from "../Components/ButtonModal";
import {useState} from "react";

const Register = () => {

    const [open, setOpen] = useState(false);

    function openTemplateForm() {
        setOpen(true)

    }

    return (<Container  style={{display:"flex"}}>

            <Grid container spacing={2}>
                <Grid item xs={1} lg={4}>
                    <ButtonModal title={"Template"} description={"Créer une template de Diplôme"} image={"https://picsum.photos/200"}>
                        <Button onClick={openTemplateForm} variant={"contained"}>Créer</Button>
                    </ButtonModal>
                </Grid>
                <Grid item xs={1} lg={4}>
                    <ButtonModal title={"Template"} description={""}/>
                </Grid>
                <Grid item xs={1} lg={4}>
                    <ButtonModal title={"Template"} description={""}/>
                </Grid>

            </Grid>

        </Container>
    )
}
export default Register
