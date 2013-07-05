(function(win, doc, $){

    $(function(){
        /* 
         * 处理数组的方法
         * / slice,splice,shift,unshift,push,pop,join,concat,reverse,sort
         *
         * var a = [1,2,3,4,5];
         *
         * slice(start, end);  以数组的形式返回数组的一部分，注意不包括 end 对应的元素，如果省略 end 将复制 start 之后的所有元素
         * var b = a.slice(2,5); //a=[1,2,3,4,5]; b=[3,4,5];
         *
         * splice(start, howmany, val1,val2,....)
         * start开始删 howmany删多少， 删完在当前位置插入val1，val2 ,删除从指定位置start开始的指定数量howmany的元素，数组形式返回所移除的元素
         * var b = a.splice(2,2,7,8,9); // a=[1,2,7,8,9,5] b=[3,4];
         * 
         * push(1,2); 将一个或多个新元素添加到数组结尾，并返回数组新长度
         * var b = a.push(1,3);  // a =[1,2,3,4,5,1,2]; b=7;
         *
         * pop(); 移除最后一个元素并返回该元素值
         * var b = a.pop();  // a = [1,2,3,4]; b = 5;
         *
         * shift(); // 移除最前一个元素并返回该元素值，数组中元素自动前移
         * var b = a.shift();  //a=[2,3,4,5]; b=1;
         *
         * unshift();将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度
         * var b = a.unshift(1,3); // a = [1,3,1,2,3,4,5]; b = 7;
         *
         * reverse(); 反转元素（最前的排到最后、最后的排到最前），返回数组地址
         * var b = a.reverse(); // a = [1,2,3,4,5]; b = [5,4,3,2,1];
         *
         * sort(); 对数组元素排序，返回数组地址
         * var b = a.sort();  // a = [1,2,3,4,5]; b = [1,2,3,4,5];
         *
         * concat() 返回数组的拷贝数组，注意是一个新的数组，不是指向
         * var b = a.concat(); // b = [1,2,3,4,5]; a=[1,2,3,4,5];
         * var b = a.concat(1,2); // b = [1,2,3,4,5,1,2]; a=[1,2,3,4,5];
         *
         * jion(); 把数组里面的元素按当前数组的排列顺序变成字符串
         * var b = a.join(''); a = [1,2,3,4,5]; b = '12345';
         * var b = a.join('+'); a = [1,2,3,4,5]; b = '1+2+3+4+5';
         *
         */


        //数组去重
        
        var ary1 = [10, 1, 2, 3, 4, 5, 6, 7, 8, 4, 5, 2,1, 3, 9, 0];

        var ARRAY = {
            
            //unique 唯一的  数组去重
            ary_unique : function( ary ){

                var i, len;
                var map = {};
                var ary2 = [];

                for(i = 0,len = ary.length; i < len; i++){
                    if( !map[ ary[i] ] ){
                        ary2.push( ary[i] );
                        map[ ary[i] ] = true;
                    }
                }
                return ary2;
            },

            //数组从大到小排列
            ary_max_min : function( ary ){

                ary.sort(function(a ,b){
                    return b - a; 
                }); 
            },

            //数组从小到大排列
            ary_min_max : function( ary ){

                ary.sort(function(a ,b){
                    return a - b;
                }); 
            },
            
            //取数组最大值;
            ary_max : function( ary ){

                var i, len;            
                var max = ary[0];

                for(i = 0,len = ary.length; i < len; i++){
                    if( max < ary[i] ){
                        max = ary[i];
                    }
                }
                return max;
            },

            //取数组最小值;
            ary_min : function( ary ){

                var i, len;            
                var min = ary[0];

                for(i = 0,len = ary.length; i < len; i++){
                    if( min > ary[i] ){
                        min = ary[i];
                    }
                }
                return min;
            }

        };




    }); // jQuery.ready(function(){}); --end

})(window, document, $);

