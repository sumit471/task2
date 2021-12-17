import { useLocation } from "react-router";
import { useEffect,useState } from "react";
import { makeStyles,Table, TableCell, TableRow , TableBody ,TableHead } from "@material-ui/core";

const useStyle = makeStyles({
    table:{
        width:"90%",
        margin:'50px 0 0 50px'
    },
    thead:{
        '&>*':{
            background:"#000000",
            color:"#FFFFFF",
            fontSize:"20px"
        }
    },
    row:{
        '&>*':{
            fontSize:"20px"
        }
    }

})

const Alldata = () =>{


    const { state } = useLocation();
    const { data, column } = state
    // console.log(data, column)

    const classes = useStyle();
     data?.sort((a,b)=>Number(a.popularity) < Number(b.popularity) && 1 || -1);

    return (
 
       <Table className ={classes.table}>
           <TableHead>
              <TableRow  className={classes.thead}>
                 {
                     column?.map((x,id) =>(
                        <TableCell>{x}</TableCell>
                       
                     ))
                 }
              </TableRow>
           </TableHead>
           <TableBody>
            {
                data?.map((datas,id) => (
                   <TableRow key={id} className={classes.row}>
                       {
                           column?.map((x,id) => (
                            <TableCell>{datas[x.toLowerCase()]}</TableCell>
                           ))
                       }
                   </TableRow>
                ))
            }
           </TableBody>
       </Table>
    )
}
export default Alldata;