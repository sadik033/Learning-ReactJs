export const SidebarData = [
    {
     icon: <i className="ri-home-3-line"></i>,
     heading: "Dashboard",   
    },
    {
     icon: <i className="ri-window-line"></i>,
     heading: "Order",   
    },
    {
     icon: <i className="ri-window-line"></i>,
     heading: "Customer",   
    },
    {
     icon: <i className="ri-mobile-download-line"></i>,
     heading: "Products" ,  
    },
    {
     icon: <i className="ri-code-s-slash-line"></i>,
     heading: "Analytics" ,  
    },

];

export const CardData =[
    {
        title: "Sales",
        color:{
            backGround: "Linear-gradient(180deg, #bb67ff 0%, #c484f3 100% )",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: <i className="ri-money-dollar-box-line"></i>,
        series:[
            {
                name: "Sales",
                data:[31,40,28,51,42,109,100],
            },
        ],    
    },
    {
        title: "Revenue",
        color:{
            backGround: "Linear-gradient(180deg, #FF919D 0%, #FC929D 100% )",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 70,
        value: "14,270",
        png: <i className="ri-money-dollar-box-line"></i>,
        series:[
            {
                name: "Revenue",
                data:[10, 100, 50, 70, 80, 30, 40],
            },
        ],    
    },
    {
        title: "Expenses",
        color:{
            backGround: "Linear-gradient(180deg, #FF919D 0%, #FC929D 100% )",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 70,
        value: "4,270",
        png: <i className="ri-money-dollar-box-line"></i>,
        series:[
            {
                name: "Expenses",
                data:[10, 25, 15, 30, 12, 15, 20],
            },
        ],    
    },
]