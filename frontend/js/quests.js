async function loadQuests(){

    const response = await fetch("http://localhost:5000/api/quests");

    const data = await response.json();

    const quests = [

        {

            title:"🚗 Create Bookings",

            progress:data.bookings,

            target:5000,

            reward:100

        },

        {

            title:"💰 Discount Approvals",

            progress:data.discounts,

            target:500,

            reward:150

        },

        {

            title:"💳 Credit Approvals",

            progress:data.credits,

            target:1000,

            reward:200

        }

    ];

    const container=document.getElementById("questContainer");

    container.innerHTML="";

    quests.forEach(q=>{

        let percent=Math.min(

            (q.progress/q.target)*100,

            100

        );

        let completed=q.progress>=q.target;

        container.innerHTML+=`

        <div class="quest-card">

            <h2>${q.title}</h2>

            <p>

            ${q.progress}/${q.target}

            </p>

            <div class="progress">

                <div

                class="progress-fill"

                style="width:${percent}%">

                </div>

            </div>

            <h3>

            Reward : ${q.reward} XP

            </h3>

            <button>

            ${completed ? "✅ Completed":"🎯 In Progress"}

            </button>

        </div>

        `;

    });

}

loadQuests();