import styled from "styled-components";

export const Table = styled.table`
    margin-top: 50px;
    max-width: 750px;
    display: block;
    max-height: 750px;
    table-layout: fixed;
    border-collapse: collapse;
    overflow-x: scroll;
    overflow-y: scroll;

    th, td {
        padding: 5px;
        text-align: left;
    }
    & > td {
        min-width: 70px;
        text-align: center;
    }

    & tbody {
        max-width: 750px;
        max-height: 750px;
        tr:nth-child(even) {
            background-color: #DDD;
        }
    }

    & thead {
        tr {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            background-color: #AAA;
            color: green;
            font-weight: 700;
        }
    }
`;