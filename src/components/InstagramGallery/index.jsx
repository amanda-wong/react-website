import React, { Component } from "react";
import "./style.css";

export class InstagramGallery extends Component {
    componentDidMount() {
        const token = '36678597.c769071.94c9b79038254991a8af374f77cd33f1';

        fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            referrer: "no-referrer"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

    }


    // handleApiResponse(response) {
    //     var instaPosts = response.data;
    //     var instagrid = jQuery(document.getElementById('instagram-grid'));

    //     //Filter posts with tags amandaoutandabout
    //     instaPosts = instaPosts.filter(function (el) {
    //         if (el.tags && el.tags.indexOf('amandaoutandabout') >= 0) {
    //             return true;
    //         }
    //     });


    //     console.log("======== InstaPosts =======", instaPosts);
        
    // }

    render() {
            return (
                <div className="instagram">

                </div>
            );
        }
    }


// // Instagram Ajax call and modal script
// var modalBackground = document.querySelector('.modal-background');
// var modalInner = document.querySelector('.modal-inner');

// jQuery(document).ready(function($){
// 	var token = '36678597.c769071.94c9b79038254991a8af374f77cd33f1';
// 	$.ajax({
// 		url: 'https://api.instagram.com/v1/users/self/media/recent',
// 		dataType: 'jsonp',
// 		type: 'GET',
// 		data: {access_token: token},
// 		success: handleApiResponse
// 	});
// });

// window.addEventListener('keydown', function(e){
// 	if(e.keyCode == '27') {
// 		closeModal();
// 	}
// });

// window.addEventListener('click', function(e){
// 	if(e.target.contains(modalInner)){
// 		closeModal();
// 	}
// });

// function closeModal() {
// 	modalBackground.style.display = 'none';
// 	document.body.style.overflowY = 'auto';
// }

// function handleApiResponse(response) {
// 	var instaPosts = response.data;
// 	var instagrid = jQuery(document.getElementById('instagram-grid'));

// 	//Filter posts with tags amandaoutandabout
// 	instaPosts = instaPosts.filter(function(el){
// 		if(el.tags && el.tags.indexOf('amandaoutandabout') >= 0) {
// 			return true;
// 		}
// 	});

// 	//Limit post count to 12
// 	instaPosts = instaPosts.slice(0,12);
// 	instaPosts.forEach(function(el){
// 		var imgURL = el.images.standard_resolution.url;
// 		var imgWidth = el.images.standard_resolution.width;
// 		var profilePic = el.user.profile_picture;
// 		var caption = el.caption.text;
// 		var location = el.location ? el.location.name : '';
// 		var likesCount = el.likes.count;
// 		var dateCreated = el.created_time;
// 		var img = '\
// 			<li class="insta-block" data-imageWidth="' + imgWidth + '"data-caption="' + caption + '" \
// 				data-profilePic="' + profilePic + '" data-dateCreated="' + dateCreated + '" \
// 				data-likes="' + likesCount + '" data-location="' + location + '">\
// 					<img src="' + imgURL + '" class="insta-img"/>\
// 			</li>';

// 		instagrid.append(img);
// 	});
// 	registerModalImageViewer();
// }

// function registerModalImageViewer() {
// 	var imageBlock = document.querySelectorAll('.insta-block');

// 	imageBlock.forEach(function(link){
// 		link.addEventListener('click', function(e){
// 			e.preventDefault();

// 			//Create wrapper around image
// 			var imageEl = this.innerHTML;
// 			var imageWrap = document.getElementById('image-wrap');
// 			imageWrap.innerHTML = imageEl;

// 			//Set image description
// 			var captionEl = document.querySelector('.caption');
// 			var captionText = this.getAttribute('data-caption');
// 			if(!captionText == '') {
// 				captionEl.innerHTML = captionText;
// 			} else {
// 				var captionWrapEl = document.querySelector('.pic-details');
// 				imageWrap.nextElementSibling.remove(captionWrapEl);
// 			}

// 			//Add profile image
// 			var profilePicEl = document.querySelector('.profile-pic');
// 			var profilePic = this.getAttribute('data-profilePic');
// 			profilePicEl.innerHTML = '<img src="' + profilePic + '">';

// 			//Set location
// 			var locationEl = document.querySelector('.location');
// 			var locationText = this.getAttribute('data-location');
// 			locationEl.innerHTML = locationText;

// 			//Set likes
// 			var likesEl = document.querySelector('.likes');
// 			var likesNum = this.getAttribute('data-likes');
// 			if(!likesNum == 0) {
// 				likesEl.innerHTML = likesNum + ' likes';
// 			}

// 			//Build image date
// 			var dateEl = document.querySelector('.date-created');
// 			var dateString = this.getAttribute('data-dateCreated');
// 			var dateCreated = new Date(parseInt(dateString) * 1000); // Instagram api stores in sec not ms
// 			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 			var monthCreated = months[dateCreated.getMonth()];
// 			var dayCreated = dateCreated.getDate();
// 			var yearCreated = dateCreated.getFullYear();
// 			var fullDateCreated = monthCreated + ' ' + dayCreated + ', ' + yearCreated;
// 			dateEl.innerText = fullDateCreated;

// 			//Open and close modal
// 			modalBackground.style.display = 'flex';
// 			document.body.style.overflowY = 'hidden';  //Prevent scroll

// 			var closeIconEl = document.getElementById('close-icon');
// 			closeIconEl.addEventListener('click', function(){
// 				closeModal();
// 			});
// 		});
// 	});
// }