(function(win,$,doc){
    $(function(){

        function Ary (ary){
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
        }        
        
        var ary1 = [10, 1, 2, 3, 4, 5, 6, 7, 8, 4, 5, 2,1, 3, 9, 0];
        var ary = Ary(ary1);
        console.log( ary.sort(function(a, b){ return a-b;}) );
        
        console.log( 'xiexie'.split('') );
        /* 
         * 处理数组的方法
         * / slice,splice,shift,unshift,push,pop,join,concat,reverse,sort
         *
         * var a = [1,2,3,4,5];
         * slice(start, end);
         * var b = a.slice(2,5); //[3,4,5]
         *
         * splice(start, howmany, val1,val2,....)
         * start开始删 howmany删多少， 删完在当前位置插入val1，val2
         * var b = a.splice(2,2,7,8,9); //
         * 
         * push(1,2)
         * var b = a.push(1,3);  //b=6
         *
         * shift() //删除原数组第一项
         * b = a.shift();  //a=[2,3,4,5]; b=[1];
         *
         *
         */


    });

})(window,jQuery,document);
