calc_array = new Array();
var calcul=0;
var pas_ch=0;
function $id(id)
{
        return document.getElementById(id);
}
function f_calc(id,n)
{
        if(n=='ce')
        {
                initialiser_calc(id);
        }
        else if(n=='=')
        {
                if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
                {
                        eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
                        calc_array[id][0] = '=';
                        $id(id+'_resultat').value=calcul;
                        calc_array[id][2]=calcul;
                        calc_array[id][3]=0;
                }
        }
        else if(n=='+-')
        {
                $id(id+'_resultat').value=$id(id+'_resultat').value*(-1);
                if(calc_array[id][0]=='=')
                {
                        calc_array[id][2] = $id(id+'_resultat').value;
                        calc_array[id][3] = 0;
                }
                else
                {
                        calc_array[id][3] = $id(id+'_resultat').value;
                }
                pas_ch = 1;
        }
        else if(n=='nbs')
        {
                if($id(id+'_resultat').value<10 && $id(id+'_resultat').value>-10)
                {
                        $id(id+'_resultat').value=0;
                }
                else
                {
                        $id(id+'_resultat').value=$id(id+'_resultat').value.slice(0,$id(id+'_resultat').value.length-1);
                }
                if(calc_array[id][0]=='=')
                {
                        calc_array[id][2] = $id(id+'_resultat').value;
                        calc_array[id][3] = 0;
                }
                else
                {
                        calc_array[id][3] = $id(id+'_resultat').value;
                }
        }
        else
        {
                        if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
                        {
                                eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
                                $id(id+'_resultat').value=calcul;
                                calc_array[id][2]=calcul;
                                calc_array[id][3]=0;
                        }
                        calc_array[id][0] = n;
        }
        if(pas_ch==0)
        {
                calc_array[id][1] = 1;
        }
        else
        {
                pas_ch=0;
        }
        document.getElementById(id+'_resultat').focus();
        return true;
}
