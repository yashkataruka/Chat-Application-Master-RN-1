import { UPDATE_MESSAGES, UPDATE_TICKS } from "../actions/UpdateMessage"

const initialState = {
    messages: [
        {
            _id: 1, receivers: [
                {
                    receiver_id: 2, messages: [
                        {_id: 1, text: 'Hello developer', createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
                        }, {_id: 2, text: 'Hello developer', createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
                        }, {_id: 3, text: 'Hello developer', createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
                        }, {_id: 4, text: 'Hello developer', createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
                        }, {_id: 5, text: 'Hello developer', createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" },
                            image: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540yashkataruka%252Fchat-application-master-rn/Camera/855bedc3-9c55-4c32-97eb-468af88bd4f7.jpg"
                        }, {_id: 6, text: 'Hello Bot', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' },
                            video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                        }
                    ]
                },
                {
                    receiver_id: 3, messages: [
                        {_id: 7, text: 'Hello Bot', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' }
                        }, {_id: 8, text: 'H', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' }
                        }, {_id: 9, text: 'Hello Bot', sent: true, received: false, createdAt: new Date(),
                            user: { _id: 1, name: 'Yash', avatar: 'https://placeimg.com/140/140/any' }
                        }, {_id: 10, text: 'HSCJBSCJKJCBNCKJNKDCNKJNDCKNKDCNNCKDNNDNNCDNDCNKNCDNCDJNCKDNCNdc', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' }
                        }, {_id: 11, text: 'How are you?', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' },
                            audio: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'
                        }, {_id: 12, text: 'I am fine, You?', createdAt: new Date(), user: {
                            _id: 3,
                            name: 'Kartik Papreja',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p720x720/75464325_2524448724339623_8456490310300598272_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=0W4XOMVBFR4AX-pt9GL&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=654f38c538d1447898f27a23ed0057e6&oe=5EE0DF03" },
                            audio: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'
                        }
                    ]
                },
                {
                    receiver_id: 4, messages: [
                        {_id: 13, text: 'I am fine too, thanks!', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" }
                        }, {_id: 14, text: "That's great!", sent: true, received: false, createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" }
                        }, {_id: 15, text: 'How is the weather?', createdAt: new Date(), user: {
                            _id: 4,
                            name: 'Amey Sunu',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=D84K0LEw-n8AX_vw9MA&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a75d2a315b2006bdbf213530f813fc58&oe=5EDE9020" }
                        }, {_id: 16, text: 'It has been okayish!', sent: true, received: false, image: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" }
                        }, {_id: 17, text: 'Has it been?', createdAt: new Date(), user: {
                            _id: 4,
                            name: 'Amey Sunu',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=D84K0LEw-n8AX_vw9MA&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a75d2a315b2006bdbf213530f813fc58&oe=5EDE9020" }
                        }, {_id: 18, text: 'It is sunny out there!', createdAt: new Date(), user: {
                            _id: 4,
                            name: 'Amey Sunu',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=D84K0LEw-n8AX_vw9MA&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a75d2a315b2006bdbf213530f813fc58&oe=5EDE9020" },
                            image: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC"
                        }
                    ]
                }
            ]
        },
        {
            _id: 2, receivers: [
                {
                    receiver_id: 1, messages: [
                        {_id: 1, text: 'Hello developer', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
                        }, {_id: 2, text: 'Hello developer', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
                        }, {_id: 3, text: 'Hello developer', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
                        }, {_id: 4, text: 'Hello developer', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
                        }, {_id: 5, text: 'Hello developer', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 2,
                            name: 'Ali Tariq',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" },
                            image: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540yashkataruka%252Fchat-application-master-rn/Camera/855bedc3-9c55-4c32-97eb-468af88bd4f7.jpg"
                        }, {_id: 6, text: 'Hello Bot', createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' },
                            video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                        }
                    ]
                }
            ]
        },
        {
            _id: 3, receivers: [
                {
                    receiver_id: 1, messages: [
                        {_id: 7, text: 'Hello Bot', createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' }
                        }, {_id: 8, text: 'H', createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' }
                        }, {_id: 9, text: 'Hello Bot', createdAt: new Date(),
                            user: { _id: 1, name: 'Yash', avatar: 'https://placeimg.com/140/140/any' }
                        }, {_id: 10, text: 'HSCJBSCJKJCBNCKJNKDCNKJNDCKNKDCNNCKDNNDNNCDNDCNKNCDNCDJNCKDNCNdc', createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' }
                        }, {_id: 11, text: 'How are you?', createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC' }
                        }, {_id: 12, text: 'I am fine, You?', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 3,
                            name: 'Kartik Papreja',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p720x720/75464325_2524448724339623_8456490310300598272_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=0W4XOMVBFR4AX-pt9GL&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=654f38c538d1447898f27a23ed0057e6&oe=5EE0DF03" },
                            audio: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3'
                        }
                    ]
                }
            ]
        },
        {
            _id: 4, receivers: [
                {
                    receiver_id: 1, messages: [
                        {_id: 13, text: 'I am fine too, thanks!', createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" }
                        }, {_id: 14, text: "That's great!", createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" }
                        }, {_id: 15, text: 'How is the weather?', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 4,
                            name: 'Amey Sunu',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=D84K0LEw-n8AX_vw9MA&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a75d2a315b2006bdbf213530f813fc58&oe=5EDE9020" }
                        }, {_id: 16, text: 'It has been okayish!', image: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", createdAt: new Date(), user: {
                            _id: 1,
                            name: 'Yash Kataruka',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" }
                        }, {_id: 17, text: 'Has it been?', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 4,
                            name: 'Amey Sunu',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=D84K0LEw-n8AX_vw9MA&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a75d2a315b2006bdbf213530f813fc58&oe=5EDE9020" }
                        }, {_id: 18, text: 'It is sunny out there!', sent: true, received: false, createdAt: new Date(), user: {
                            _id: 4,
                            name: 'Amey Sunu',
                            avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=D84K0LEw-n8AX_vw9MA&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a75d2a315b2006bdbf213530f813fc58&oe=5EDE9020" },
                            image: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC"
                        }
                    ]
                }
            ]
        }
                
    ]
}


// const initialState = {
//     messages: [
//         {
//             _id: 1, receivers: [
//                 {
//                     receiver_id: 2, messages: [
//                         {_id: 1, text: 'Hello developer', createdAt: new Date(), user: {
//                             _id: 2,
//                             name: 'Ali Tariq',
//                             avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
//                         }, {_id: 2, text: 'Hello developer', createdAt: new Date(), user: {
//                             _id: 2,
//                             name: 'Ali Tariq',
//                             avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             _id: 2, receivers: [
//                 {
//                     receiver_id: 1, messages: [
//                         {_id: 1, text: 'Hello developer', sent: true, received: false, createdAt: new Date(), user: {
//                             _id: 2,
//                             name: 'Ali Tariq',
//                             avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
//                         }, {_id: 2, text: 'Hello developer', sent: true, received: false, createdAt: new Date(), user: {
//                             _id: 2,
//                             name: 'Ali Tariq',
//                             avatar: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=ICu0o4ekjSMAX8hcj5V&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=1a93da0cf27ba73036a797dc30578f40&oe=5EE066BB" }
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_MESSAGES:
            console.log(action.newMessage)
            const _id = action._id
            const receiver_id = action.receiver_id
            const _id_2 = action.receiver_id
            const receiver_id_2 = action._id
            const newMessage = [...action.newMessage]
            const newMessage_2 = {...action.newMessage[0]}
            newMessage[0].sent = true,
            newMessage[0].received = false
            const oldMessages = [...state.messages]
            let oldMessages_id = oldMessages.filter(oldMessage => oldMessage._id === _id)
            let oldMessage_receiver_id = oldMessages_id[0].receivers.filter(oldMsg => oldMsg.receiver_id === receiver_id)
            let oldMessage_receiver_id_messages = oldMessage_receiver_id[0].messages
            oldMessage_receiver_id_messages = oldMessage_receiver_id_messages.concat(newMessage)
            oldMessage_receiver_id[0].messages = oldMessage_receiver_id_messages
            const index = oldMessages_id[0].receivers.findIndex(oldMsg => oldMsg.receiver_id === receiver_id)
            oldMessages_id[0].receivers[index].messages = oldMessage_receiver_id_messages
            const oldMessages_2 = [...oldMessages]
            let oldMessages_id_2 = oldMessages_2.filter(oldMessage => oldMessage._id === _id_2)
            let oldMessage_receiver_id_2 = oldMessages_id_2[0].receivers.filter(oldMsg => oldMsg.receiver_id === receiver_id_2)
            let oldMessage_receiver_id_messages_2 = oldMessage_receiver_id_2[0].messages
            oldMessage_receiver_id_messages_2 = oldMessage_receiver_id_messages_2.concat(newMessage_2)
            oldMessage_receiver_id_2[0].messages = oldMessage_receiver_id_messages_2
            const index_2 = oldMessages_id_2[0].receivers.findIndex(oldMsg => oldMsg.receiver_id === receiver_id_2)
            oldMessages_id_2[0].receivers[index_2].messages = oldMessage_receiver_id_messages_2
            return {
                ...state,
                messages: oldMessages_2
            }
        case UPDATE_TICKS:
            const updateTick_id = action.receiver_id
            let oldMessagesTicks = [...state.messages]
            let oldMessages_updateTick_id = oldMessagesTicks.filter(oldMessage => oldMessage._id === updateTick_id)
            let oldMessages_updateTick_id_receiver = oldMessages_updateTick_id[0].receivers.filter(id => id.receiver_id === action._id)
            for (var i in oldMessages_updateTick_id_receiver[0].messages)
            {
                if (oldMessages_updateTick_id_receiver[0].messages[i].user._id === updateTick_id)
                {
                    oldMessages_updateTick_id_receiver[0].messages[i].received = true
                }
            }
            return {
                ...state,
                messages: oldMessagesTicks
            }

        default:
            return state
        }
    }
    
// const initialState = {
//     messages: [
//         {_id: 1, text: 'Hello developer', createdAt: new Date(), received: true, user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl }
//     }, {_id: 2, text: 'Hello developer', createdAt: new Date(), user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl }
//     }, {_id: 3, text: 'Hello developer', createdAt: new Date(), user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl }
//     }, {_id: 4, text: 'Hello developer', createdAt: new Date(), user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl }
//     }, {_id: 5, text: 'Hello developer', createdAt: new Date(), user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl }
//     }, {_id: 6, text: 'Hello Bot', createdAt: new Date(), user: {
//         _id: 1,
//         name: 'Yash',
//         avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 7, text: 'Hello Bot', createdAt: new Date(), user: {
//         _id: 1,
//         name: 'Yash',
//         avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 8, text: 'H', sent: true, createdAt: new Date(), user: {
//         _id: 1,
//         name: 'Yash',
//         avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 9, text: 'Hello Bot', createdAt: new Date(),
//         user: { _id: 1, name: 'Yash', avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 10, text: 'HSCJBSCJKJCBNCKJNKDCNKJNDCKNKDCNNCKDNNDNNCDNDCNKNCDNCDJNCKDNCNdc', createdAt: new Date(), sent: true, received: true, user: {
//         _id: 1,
//         name: 'Yash',
//         avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 11, text: 'How are you?', createdAt: new Date(), user: {
//         _id: 1,
//         name: 'Yash',
//         avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 12, text: 'I am fine, You?', createdAt: new Date(), user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl }
//     }, {_id: 13, text: 'I am fine too, thanks!', createdAt: new Date(), user: {
//         _id: 1,
//         name: 'Yash',
//         avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 14, text: "That's great!", createdAt: new Date(), user: {
//         _id: 1,
//         name: 'Yash',
//         avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 15, text: 'How is the weather?', createdAt: new Date(), user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl }
//     }, {_id: 16, text: 'It has been okayish!', image: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", createdAt: new Date(), user: {
//         _id: 1,
//         name: 'Yash',
//         avatar: 'https://placeimg.com/140/140/any' }
//     }, {_id: 17, text: 'Has it been?', createdAt: new Date(), user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl }
//     }, {_id: 18, text: 'It is sunny out there!', createdAt: new Date(), user: {
//         _id: 2,
//         name: 'React Native',
//         avatar: imageUrl },
//         image: "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC"
//     }]
// }
    // {
        //     _id: 19, text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT', createdAt: new Date(2020, 5, 19, 21, 32, 30, 0),
        //     quickReplies: { type: 'radio', // or 'checkbox',
//         keepIt: true,
//         values: [
//             {
//                 title: '😋 Yes',
//                 value: 'yes',
//             },
//             {
//                 title: '📷 Yes, let me show you with a picture!',
//                 value: 'yes_picture',
//             },
//             {
//                 title: '😞 Nope. What?',
//                 value: 'no',
//             }
//         ]}, user: {_id: 2, name: 'React Native' }
//     }