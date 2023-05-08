"use client"; // this is a client component

import Spinner from "../spinner";
import { useFiles } from '../../hooks/useFiles';
import { SnackbarProvider, useSnackbar } from 'notistack';

export default function TableFiles() {
    const { enqueueSnackbar } = useSnackbar();
    const { files, isLoadingFiles, error } = useFiles()

    return (
        <table className="table table-striped table-hover table-bordered">
            {isLoadingFiles && <Spinner />}
            {error && enqueueSnackbar(error, { variant: "warning" })}
            <thead>
                <tr>
                    <th scope="col">File Name</th>
                    <th scope="col">Text</th>
                    <th scope="col">Number</th>
                    <th scope="col">Hexadecimal</th>
                </tr>
            </thead>
            <tbody>
                {files.map((item, ind) => {
                    let linesToShow
                    const { lines } = item
                    if (lines && lines.length > 0) {
                        linesToShow = lines.map((element, i) => {
                            return (
                                <tr key={'tr_' + ind + i}>
                                    <th scope="row">{item.file}</th>
                                    <td>{element.text}</td>
                                    <td>{element.number}</td>
                                    <td>{element.hex}</td>
                                </tr>
                            )
                        });
                    }
                    return linesToShow
                })}
            </tbody>
        </table>
    )
}