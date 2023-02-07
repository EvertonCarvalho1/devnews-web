import React, { useState, FormEvent, useRef } from 'react';
import { History } from 'history';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from "formik";
import { useNews } from '../../hooks/news'
import { toast } from 'react-toastify';

export function EditNews() {
    const navigate = useNavigate();
    const { addNews } = useNews();

    const formik = useFormik({
        initialValues: {
            title: "",
            subtitle: "",
            content: "",
        },
        validationSchema: yup.object({
            title: yup
                .string()
                .required("O campo título é obrigatório."),
            subtitle: yup
                .string()
                .required("O campo subtítulo é obrigatório."),
            content: yup
                .string()
                .required("O campo conteúdo é obrigatório."),
        }),
        onSubmit: async (values) => {
            try {
                await addNews(values);
                toast.success('Noticia adicionada!');
                navigate('/');
            } catch (err) {
                toast.error('Ocorreu um erro ao adicionar a noticia.');
            }
        },
    });

    return (
        <Container>

            <div className='container2'>
                <h2>Adicionar Notícia</h2>
                <form
                    className='ui form'
                    onSubmit={formik.handleSubmit}
                >
                    <div className='field'>
                        <label>Título</label>
                        <input
                            type='text'
                            name='title'
                            placeholder='Digite o título'
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />

                        {formik.touched.title && formik.errors.title ? (
                            <div className='errorMessage'>{formik.errors.title}</div>
                        ) : null}

                    </div>

                    <div className='field'>
                        <label>Subtítulo</label>
                        <input
                            type='text'
                            name='subtitle'
                            placeholder='Digite o subtítulo'
                            onChange={formik.handleChange}
                            value={formik.values.subtitle}
                        />

                        {formik.touched.subtitle && formik.errors.subtitle ? (
                            <div className='errorMessage'>{formik.errors.subtitle}</div>
                        ) : null}
                    </div>
                    <div className='field '>
                        <label>Conteúdo</label>
                        <input
                            className='inputContent'
                            type='text'
                            name='content'
                            placeholder='Digite o conteúdo'
                            onChange={formik.handleChange}
                            value={formik.values.content}
                        />
                        {formik.touched.content && formik.errors.content ? (
                            <div className='errorMessage'>{formik.errors.content}</div>
                        ) : null}

                    </div>

                    <button
                        className='ui button blue'
                        type='submit'
                    >
                        Editar
                    </button>
                    <Link to='/'>
                        <button style={{ marginLeft: '10px' }} className='ui button red center'>Cancelar</button>
                    </Link>
                </form>
            </div>
        </Container>

    );

}
