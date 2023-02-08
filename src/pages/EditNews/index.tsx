import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from "formik";
import { useNews } from '../../hooks/news'
import { toast } from 'react-toastify';

export function EditNews() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { newsData, editNews } = useNews();


    const newsFilteredById = useMemo(() => {
        return newsData.find((item) => {
            return item.id === state.news_id;
        });
    }, [newsData, state]);


    const formik = useFormik({
        initialValues: {
            title: newsFilteredById?.title === undefined ? '' : newsFilteredById.title,
            subtitle: newsFilteredById?.subtitle === undefined ? '' : newsFilteredById.subtitle,
            content: newsFilteredById?.content === undefined ? '' : newsFilteredById.content
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
                if (newsFilteredById?.id) {
                    await editNews({ ...values, news_id: newsFilteredById.id });
                    toast.success('Noticia editada!');
                    navigate('/');
                }
            } catch (err) {
                toast.error('Ocorreu um erro ao editar a noticia.');
            }
        },
    });

    return (
        <Container>

            <div className='container2'>
                <h2>Editar Notícia</h2>
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
