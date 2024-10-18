const webPageRes = [
    {
        project_img: './assets/imgs/custom-date-field.png',
        alt_text:'Custom date field project',
        title: 'Custom Date Field',
        project_description: "his is custom date field project, It's UI is more visually apealing than the default date field comes in HTML5.",
        created_date: '27/09/2024',
        live_url: 'https://prashant-kumar-321.github.io/date-field-custom/',
        github_url: 'https://github.com/Prashant-Kumar-321/date-field-custom',
    }, 
    {
        project_img: './assets/imgs/card-Slide.png',
        alt_text:'Custome date field',
        title: 'Horizontal card slide project',
        project_description: 'This is horizontal card slide project, in which card are sliding and it is responsive',
        created_date: '25/08/2024',
        live_url: 'https://prashant-kumar-321.github.io/card-slide/',
        github_url: 'https://github.com/Prashant-Kumar-321/card-slide',
    }, 
    {
        project_img: './assets/imgs/e-commerce.png',
        alt_text:'E-commerce Product card',
        title: 'E-commerce Product Card',
        project_description: 'This is a product card project. I have built a product card of an e-com which is resonsive.',
        created_date: '09/10/2024',
        live_url: 'https://prashant-kumar-321.github.io/E-commerce-frontend-taiwlind/',
        github_url: 'https://github.com/Prashant-Kumar-321/E-commerce-frontend-taiwlind',
    }, 
    {
        project_img: './assets/imgs/awesome-social-media.png',
        alt_text:'social Media app',
        title: 'Social Media Web App UI',
        project_description: 'This is social media Web App UI, in which user can post content and view the top trending ones, fully adaptable in all screen sizes.',
        created_date: '23/10/2024',
        live_url: 'https://prashant-kumar-321.github.io/Awesome-Post/',
        github_url: 'https://github.com/Prashant-Kumar-321/Awesome-Post',
    }, 
]

// Script to add project cards in the web page 
const projectCardContainer = document.querySelector('#project-cards-container');

function getProjectCard(cardDetails){
    const card = document.createElement('article'); 
    card.innerHTML = `<figure class="w-full h-40 rounded-md">
                        <img class="h-full w-full object-cover rounded-lg" src="${cardDetails['project_img']}" alt="${cardDetails['alt_text']}">
                    </figure>
                    <!-- Project info -->
                    <div class="space-y-3">
                        <h2 class="font-medium text-2xl tablet:text-3xl">${cardDetails['title']}</h2>
                        <p class="font-normal text-lg">${cardDetails['project_description']}.</p>
                        <p class="text-lg font-semibold text-gray-700">${cardDetails['created_date']}</p>
                        <div class="flex justify-end gap-6 items-center">
                            <a href="${cardDetails['live_url']}" target="_blank" class="flex items-center gap-2 px-4 py-2 tablet:py-3 bg-gray-800 text-white rounded-lg text-bold text-sm tablet:text-lg transition duration-300 hover:bg-gray-700 active:scale-[0.80] shadow shadow-gray-700">
                                <img class="h-6 w-6" width="50" height="50" src="https://img.icons8.com/ios/ffffff/50/chain.png" alt="chain"/>
                                <span>Live</span>
                            </a>
                            <a href="${cardDetails['github_url']}" target="_blank" class="flex items-center gap-2 px-4 py-2 tablet:py-3 bg-gray-800 text-white rounded-lg text-bold text-sm tablet:text-lg transition duration-300 hover:bg-gray-700 active:scale-[0.80] shadow shadow-gray-700">
                                <img class="h-6 w-6" width="30" height="30" src="https://img.icons8.com/ios-glyphs/ffffff/30/github.png" alt="github"/>
                                <span>Github</span>
                            </a>
                        </div>
                    </div>    
    `
    card.classList.add('project-card'); 
    return card; 
}

webPageRes.forEach(res => {
    projectCardContainer.appendChild(getProjectCard(res)); 
}); 
