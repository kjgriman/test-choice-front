"use client"; // this is a client component
import TableFiles from "../../components/tableFiles";
import TestLayout from "./layaout";
import { SnackbarProvider, useSnackbar } from 'notistack';

export default function HomePage() {

    return (
         <SnackbarProvider>

        <TestLayout>
            <div className="container-fluid">
                <TableFiles/>
            </div>
        </TestLayout>
         </SnackbarProvider>
    );
}