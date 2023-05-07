import TableFiles from "../../components/tableFiles";
import TestLayout from "./layaout";

export default function HomePage() {

    return (
        <TestLayout>
            <div className="container-fluid">
                <TableFiles/>
            </div>
        </TestLayout>
    );
}