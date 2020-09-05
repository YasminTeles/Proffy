import React from "react"

import PageHeader from "../../components/PageHeader"
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg"

import "./styles.css"

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição."    
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    
                    <Input name="avatar" label="Avatar" />
                    
                    <Input name="Whatsapp" label="Whatsapp" />

                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject" 
                        label="Máteria" 
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Física", label: "Física" },
                            { value: "Química", label: "Química" },
                        ]}    
                    />
                    
                    <Input name="cost" label="Custo de sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis

                        <button type="button">
                            + Novo horário
                        </button>
                    </legend>

                    <div className="schedule-item">
                        <Select 
                            name="week_day" 
                            label="Dia da semana" 
                            options={[
                                { value: "0", label: "Segunda-feira" },
                                { value: "1", label: "Terça-feira" },
                                { value: "2", label: "Quarta-feira" },
                                { value: "3", label: "Quinta-feira" },
                                { value: "4", label: "Sexta-feira" },
                            ]}    
                        />

                        <Input type="time" name="from" label="Das" />
                        
                        <Input type="time" name="to" label="Até" />
                    </div>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados.
                    </p>

                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>

        </div>
    )
} 

export default TeacherForm;