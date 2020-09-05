import React from "react"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://www.tupi.fm/wp-content/uploads/2019/07/homem-768x512.jpeg" alt="Professor" />
                <div>
                    <strong>Nome do professor</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Sobre o professor
            </p>

            <footer>
                <p>
                    Preço/hora: <strong>$6,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contanto
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem