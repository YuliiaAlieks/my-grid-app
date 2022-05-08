import { useCallback, useEffect, useMemo, useRef } from "react";
import { AgGridReact } from 'ag-grid-react';
import _ from "lodash";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { ColDef } from "ag-grid-community";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Button } from "../../components/Button/Button";
import { PageSizeOptions } from "../../components/PageSizeOptions/PageSizeOptions";
import { useNavigate } from "react-router-dom";


export function UsersGrid() {
    const { users, status } = useSelector((state: RootState) => state.users);
    const navigate = useNavigate();
    const gridRef: any = useRef();

    const columnDefs: ColDef[] = [
        { headerName: 'Name', field: 'name' },
        { headerName: 'User Name', field: 'username', },
        { headerName: 'Email', field: 'email' },
        { headerName: 'Gender', field: 'gender' },
        {
            headerName: 'Register Date', field: 'registerDate', cellRenderer: (data) => {
                return data.value ? (new Date(data.value)).toLocaleDateString() : '';
            }
        },
        { headerName: 'Phone', field: 'phone' },
        { headerName: 'Thumbnail', field: 'thumbnail' },
        { headerName: 'Nationality', field: 'nationality' },
        { headerName: 'Id', field: 'id', hide: true }
    ];

    const defaultColDef = useMemo(() => ({
        sortable: false,
        filter: false,

    }), []);

    const rowData = users;

    const firstDataRenderHandler = (e) => {
        if (status === 'loading') {
            gridRef.current.api.showLoadingOverlay()
        }
        gridRef.current.api.sizeColumnsToFit();
    };

    useEffect(() => {
        const handleSizeChange = _.debounce(() => {
            gridRef.current.api.sizeColumnsToFit();
        }, 100);

        window.addEventListener('resize', handleSizeChange);

        return () => {
            window.removeEventListener('resize', handleSizeChange);
        }
    }, []);

    const onPageSizeChanged = useCallback((e) => {
        const value = e.target.value
        gridRef.current.api.paginationSetPageSize(value);
    }, []);

    const onClearButtonClick = useCallback(e => {
        gridRef.current.api.deselectAll();
    }, []);

    return (
        <div className='ag-theme-alpine-dark' >
            <Button onClick={onClearButtonClick} >Clear Highlighting</Button>
            <PageSizeOptions onChange={onPageSizeChanged} />
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                onGridReady={firstDataRenderHandler}
                rowSelection='multiple'
                domLayout='autoHeight'
                defaultColDef={defaultColDef}
                pagination={true}
                paginationPageSize={5}
                suppressDragLeaveHidesColumns
                onRowClicked={(e) => {
                    const id = e.data.id;
                    navigate(`/users/${id}`)
                }}
            />
        </div>
    )
}