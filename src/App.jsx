import { useState } from 'react';
import Container from './components/Container/Container';
import ContactForm from './components/Form/Form';
import Modal from './components/Modal/Modal';

function App() {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);

        setTimeout(() => {
            setOpenModal(false);
        }, 3000);
    };
    return (
        <>
            <Container>
                <ContactForm toggleModal={toggleModal} />
                <Modal isOpen={openModal} toggleModal={toggleModal} />
            </Container>
        </>
    );
}

export default App;
