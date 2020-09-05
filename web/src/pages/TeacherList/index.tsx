import React from "react"

import PageHeader from "../../components/PageHeader"
import TeatcherItem from "../../components/TeacherItem"
import Input from "../../components/Input"
import Select from "../../components/Select"

import "./styles.css"

function TeatcherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os professores disponíveis" >
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Máteria" 
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Fisíca", label: "Fisíca" },
                            { value: "Química", label: "Química" },
                        ]}    
                    />

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

                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>
            
            <main>
                <TeatcherItem />
                <TeatcherItem />
                <TeatcherItem />
                <TeatcherItem />
                <TeatcherItem />
            </main>

        </div>
    )
} 

export default TeatcherList;