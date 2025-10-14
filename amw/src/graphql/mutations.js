/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const sendNotification = /* GraphQL */ `
  mutation SendNotification($payload: PushNotificationPayload!) {
    sendNotification(payload: $payload)
  }
`;
export const deleteStoryByUserId = /* GraphQL */ `
  mutation DeleteStoryByUserId(
    $input: deleteStoryByUserIdInput!
    $condition: deleteStoryByUserIdCondition!
  ) {
    deleteStoryByUserId(input: $input, condition: $condition) {
      id
      title
      inviteCode
      inviteCodeForOwner
      imageUrl
      userId
      userIds
      users {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owners {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      chapters {
        items {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      locked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storyUserId
      owner
      __typename
    }
  }
`;
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData($payload: deleteUserDataPayload!) {
    deleteUserData(payload: $payload)
  }
`;
export const sendEmail = /* GraphQL */ `
  mutation SendEmail($payload: sendEmailPayload!) {
    sendEmail(payload: $payload)
  }
`;
export const storageStatistics = /* GraphQL */ `
  mutation StorageStatistics($payload: StorageStatisticsPayload!) {
    storageStatistics(payload: $payload)
  }
`;
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
      id
      parentId
      timestamp
      imageUrl
      videoUrl
      mediaSizeMegaBytes
      isVideo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
      id
      parentId
      timestamp
      imageUrl
      videoUrl
      mediaSizeMegaBytes
      isVideo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
      id
      parentId
      timestamp
      imageUrl
      videoUrl
      mediaSizeMegaBytes
      isVideo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      timestamp
      message
      title
      storyId
      StoryName
      inviteCode
      storyImageUrl
      isRead
      isStoryJoined
      redirectUrl
      momentId
      fromUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationFromUserId
      notificationToUserId
      __typename
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      timestamp
      message
      title
      storyId
      StoryName
      inviteCode
      storyImageUrl
      isRead
      isStoryJoined
      redirectUrl
      momentId
      fromUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationFromUserId
      notificationToUserId
      __typename
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      timestamp
      message
      title
      storyId
      StoryName
      inviteCode
      storyImageUrl
      isRead
      isStoryJoined
      redirectUrl
      momentId
      fromUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationFromUserId
      notificationToUserId
      __typename
    }
  }
`;
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
      id
      parentId
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      timestamp
      elementId
      element {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      awswerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attachmentUserId
      __typename
    }
  }
`;
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
      id
      parentId
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      timestamp
      elementId
      element {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      awswerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attachmentUserId
      __typename
    }
  }
`;
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
      id
      parentId
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      timestamp
      elementId
      element {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      awswerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attachmentUserId
      __typename
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questionId
      text
      attachments {
        items {
          id
          parentId
          userId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          timestamp
          elementId
          element {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          type
          awswerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          attachmentUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      attachmentIds
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answerUserId
      __typename
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questionId
      text
      attachments {
        items {
          id
          parentId
          userId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          timestamp
          elementId
          element {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          type
          awswerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          attachmentUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      attachmentIds
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answerUserId
      __typename
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questionId
      text
      attachments {
        items {
          id
          parentId
          userId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          timestamp
          elementId
          element {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          type
          awswerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          attachmentUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      attachmentIds
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answerUserId
      __typename
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      userId
      title
      timestamp
      toUserId
      answer {
        id
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questionId
        text
        attachments {
          items {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachmentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answerUserId
        __typename
      }
      answerId
      attachments {
        id
        parentId
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        timestamp
        elementId
        element {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        type
        awswerId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attachmentUserId
        __typename
      }
      attachmentIds
      chapterId
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      storyId {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionToUserId
      questionStoryIdId
      __typename
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      userId
      title
      timestamp
      toUserId
      answer {
        id
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questionId
        text
        attachments {
          items {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachmentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answerUserId
        __typename
      }
      answerId
      attachments {
        id
        parentId
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        timestamp
        elementId
        element {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        type
        awswerId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attachmentUserId
        __typename
      }
      attachmentIds
      chapterId
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      storyId {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionToUserId
      questionStoryIdId
      __typename
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      userId
      title
      timestamp
      toUserId
      answer {
        id
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questionId
        text
        attachments {
          items {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachmentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answerUserId
        __typename
      }
      answerId
      attachments {
        id
        parentId
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        timestamp
        elementId
        element {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        type
        awswerId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attachmentUserId
        __typename
      }
      attachmentIds
      chapterId
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      storyId {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionToUserId
      questionStoryIdId
      __typename
    }
  }
`;
export const createMoment = /* GraphQL */ `
  mutation CreateMoment(
    $input: CreateMomentInput!
    $condition: ModelMomentConditionInput
  ) {
    createMoment(input: $input, condition: $condition) {
      id
      title
      order
      mediaId
      description
      userId
      taggedUserIds
      taggedUsers {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      timestamp
      storyId
      chapterId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      media {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      reportedCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      momentUserId
      momentMediaId
      momentStoryId
      __typename
    }
  }
`;
export const updateMoment = /* GraphQL */ `
  mutation UpdateMoment(
    $input: UpdateMomentInput!
    $condition: ModelMomentConditionInput
  ) {
    updateMoment(input: $input, condition: $condition) {
      id
      title
      order
      mediaId
      description
      userId
      taggedUserIds
      taggedUsers {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      timestamp
      storyId
      chapterId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      media {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      reportedCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      momentUserId
      momentMediaId
      momentStoryId
      __typename
    }
  }
`;
export const deleteMoment = /* GraphQL */ `
  mutation DeleteMoment(
    $input: DeleteMomentInput!
    $condition: ModelMomentConditionInput
  ) {
    deleteMoment(input: $input, condition: $condition) {
      id
      title
      order
      mediaId
      description
      userId
      taggedUserIds
      taggedUsers {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      timestamp
      storyId
      chapterId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      media {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      reportedCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      momentUserId
      momentMediaId
      momentStoryId
      __typename
    }
  }
`;
export const createChapter = /* GraphQL */ `
  mutation CreateChapter(
    $input: CreateChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    createChapter(input: $input, condition: $condition) {
      id
      title
      order
      imageUrl
      isDefault
      storyId
      userId
      momentIds
      questionIds
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questions {
        items {
          id
          userId
          title
          timestamp
          toUserId
          answer {
            id
            userId
            questionId
            text
            attachmentIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            answerUserId
            __typename
          }
          answerId
          attachments {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          attachmentIds
          chapterId
          toUser {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          storyId {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionToUserId
          questionStoryIdId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      moments {
        items {
          id
          title
          order
          mediaId
          description
          userId
          taggedUserIds
          taggedUsers {
            nextToken
            startedAt
            __typename
          }
          timestamp
          storyId
          chapterId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          media {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          reportedCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          momentUserId
          momentMediaId
          momentStoryId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chapterUserId
      __typename
    }
  }
`;
export const updateChapter = /* GraphQL */ `
  mutation UpdateChapter(
    $input: UpdateChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    updateChapter(input: $input, condition: $condition) {
      id
      title
      order
      imageUrl
      isDefault
      storyId
      userId
      momentIds
      questionIds
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questions {
        items {
          id
          userId
          title
          timestamp
          toUserId
          answer {
            id
            userId
            questionId
            text
            attachmentIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            answerUserId
            __typename
          }
          answerId
          attachments {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          attachmentIds
          chapterId
          toUser {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          storyId {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionToUserId
          questionStoryIdId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      moments {
        items {
          id
          title
          order
          mediaId
          description
          userId
          taggedUserIds
          taggedUsers {
            nextToken
            startedAt
            __typename
          }
          timestamp
          storyId
          chapterId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          media {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          reportedCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          momentUserId
          momentMediaId
          momentStoryId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chapterUserId
      __typename
    }
  }
`;
export const deleteChapter = /* GraphQL */ `
  mutation DeleteChapter(
    $input: DeleteChapterInput!
    $condition: ModelChapterConditionInput
  ) {
    deleteChapter(input: $input, condition: $condition) {
      id
      title
      order
      imageUrl
      isDefault
      storyId
      userId
      momentIds
      questionIds
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questions {
        items {
          id
          userId
          title
          timestamp
          toUserId
          answer {
            id
            userId
            questionId
            text
            attachmentIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            answerUserId
            __typename
          }
          answerId
          attachments {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          attachmentIds
          chapterId
          toUser {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          storyId {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionToUserId
          questionStoryIdId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      moments {
        items {
          id
          title
          order
          mediaId
          description
          userId
          taggedUserIds
          taggedUsers {
            nextToken
            startedAt
            __typename
          }
          timestamp
          storyId
          chapterId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          media {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          reportedCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          momentUserId
          momentMediaId
          momentStoryId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chapterUserId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      lastName
      funFacts
      bio
      sharingMoments
      imageUrl
      stories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ownershipStories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrls {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      relations {
        items {
          id
          relation
          withUser
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRelationsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      emergency {
        id
        firstName
        lastName
        contact
        email
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        emergencyUserId
        __typename
      }
      taggedMoments {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      userDevices {
        channelType
        deviceToken
        __typename
      }
      isAccountProtected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userEmergencyId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      lastName
      funFacts
      bio
      sharingMoments
      imageUrl
      stories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ownershipStories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrls {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      relations {
        items {
          id
          relation
          withUser
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRelationsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      emergency {
        id
        firstName
        lastName
        contact
        email
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        emergencyUserId
        __typename
      }
      taggedMoments {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      userDevices {
        channelType
        deviceToken
        __typename
      }
      isAccountProtected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userEmergencyId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      lastName
      funFacts
      bio
      sharingMoments
      imageUrl
      stories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ownershipStories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrls {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      relations {
        items {
          id
          relation
          withUser
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRelationsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      emergency {
        id
        firstName
        lastName
        contact
        email
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        emergencyUserId
        __typename
      }
      taggedMoments {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      userDevices {
        channelType
        deviceToken
        __typename
      }
      isAccountProtected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userEmergencyId
      __typename
    }
  }
`;
export const createStoryUsersLink = /* GraphQL */ `
  mutation CreateStoryUsersLink(
    $input: CreateStoryUsersLinkInput!
    $condition: ModelStoryUsersLinkConditionInput
  ) {
    createStoryUsersLink(input: $input, condition: $condition) {
      id
      userId
      storyId
      role
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateStoryUsersLink = /* GraphQL */ `
  mutation UpdateStoryUsersLink(
    $input: UpdateStoryUsersLinkInput!
    $condition: ModelStoryUsersLinkConditionInput
  ) {
    updateStoryUsersLink(input: $input, condition: $condition) {
      id
      userId
      storyId
      role
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteStoryUsersLink = /* GraphQL */ `
  mutation DeleteStoryUsersLink(
    $input: DeleteStoryUsersLinkInput!
    $condition: ModelStoryUsersLinkConditionInput
  ) {
    deleteStoryUsersLink(input: $input, condition: $condition) {
      id
      userId
      storyId
      role
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
      id
      title
      inviteCode
      inviteCodeForOwner
      imageUrl
      userId
      userIds
      users {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owners {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      chapters {
        items {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      locked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storyUserId
      owner
      __typename
    }
  }
`;
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
      id
      title
      inviteCode
      inviteCodeForOwner
      imageUrl
      userId
      userIds
      users {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owners {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      chapters {
        items {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      locked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storyUserId
      owner
      __typename
    }
  }
`;
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
      id
      title
      inviteCode
      inviteCodeForOwner
      imageUrl
      userId
      userIds
      users {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owners {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      chapters {
        items {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      locked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storyUserId
      owner
      __typename
    }
  }
`;
export const createSharedUrl = /* GraphQL */ `
  mutation CreateSharedUrl(
    $input: CreateSharedUrlInput!
    $condition: ModelSharedUrlConditionInput
  ) {
    createSharedUrl(input: $input, condition: $condition) {
      id
      url
      isReady
      chapterId
      storyId
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      timestamp
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSharedUrlsId
      __typename
    }
  }
`;
export const updateSharedUrl = /* GraphQL */ `
  mutation UpdateSharedUrl(
    $input: UpdateSharedUrlInput!
    $condition: ModelSharedUrlConditionInput
  ) {
    updateSharedUrl(input: $input, condition: $condition) {
      id
      url
      isReady
      chapterId
      storyId
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      timestamp
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSharedUrlsId
      __typename
    }
  }
`;
export const deleteSharedUrl = /* GraphQL */ `
  mutation DeleteSharedUrl(
    $input: DeleteSharedUrlInput!
    $condition: ModelSharedUrlConditionInput
  ) {
    deleteSharedUrl(input: $input, condition: $condition) {
      id
      url
      isReady
      chapterId
      storyId
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      timestamp
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSharedUrlsId
      __typename
    }
  }
`;
export const createRelationship = /* GraphQL */ `
  mutation CreateRelationship(
    $input: CreateRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    createRelationship(input: $input, condition: $condition) {
      id
      relation
      withUser
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRelationsId
      __typename
    }
  }
`;
export const updateRelationship = /* GraphQL */ `
  mutation UpdateRelationship(
    $input: UpdateRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    updateRelationship(input: $input, condition: $condition) {
      id
      relation
      withUser
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRelationsId
      __typename
    }
  }
`;
export const deleteRelationship = /* GraphQL */ `
  mutation DeleteRelationship(
    $input: DeleteRelationshipInput!
    $condition: ModelRelationshipConditionInput
  ) {
    deleteRelationship(input: $input, condition: $condition) {
      id
      relation
      withUser
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRelationsId
      __typename
    }
  }
`;
export const createEmergency = /* GraphQL */ `
  mutation CreateEmergency(
    $input: CreateEmergencyInput!
    $condition: ModelEmergencyConditionInput
  ) {
    createEmergency(input: $input, condition: $condition) {
      id
      firstName
      lastName
      contact
      email
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      emergencyUserId
      __typename
    }
  }
`;
export const updateEmergency = /* GraphQL */ `
  mutation UpdateEmergency(
    $input: UpdateEmergencyInput!
    $condition: ModelEmergencyConditionInput
  ) {
    updateEmergency(input: $input, condition: $condition) {
      id
      firstName
      lastName
      contact
      email
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      emergencyUserId
      __typename
    }
  }
`;
export const deleteEmergency = /* GraphQL */ `
  mutation DeleteEmergency(
    $input: DeleteEmergencyInput!
    $condition: ModelEmergencyConditionInput
  ) {
    deleteEmergency(input: $input, condition: $condition) {
      id
      firstName
      lastName
      contact
      email
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      emergencyUserId
      __typename
    }
  }
`;
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
      id
      name
      userID
      email
      reason
      reportedContent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
      id
      name
      userID
      email
      reason
      reportedContent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
      id
      name
      userID
      email
      reason
      reportedContent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createStorageStatistics = /* GraphQL */ `
  mutation CreateStorageStatistics(
    $input: CreateStorageStatisticsInput!
    $condition: ModelStorageStatisticsConditionInput
  ) {
    createStorageStatistics(input: $input, condition: $condition) {
      id
      timestamp
      fileSize
      s3Key
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storageStatisticsUserId
      __typename
    }
  }
`;
export const updateStorageStatistics = /* GraphQL */ `
  mutation UpdateStorageStatistics(
    $input: UpdateStorageStatisticsInput!
    $condition: ModelStorageStatisticsConditionInput
  ) {
    updateStorageStatistics(input: $input, condition: $condition) {
      id
      timestamp
      fileSize
      s3Key
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storageStatisticsUserId
      __typename
    }
  }
`;
export const deleteStorageStatistics = /* GraphQL */ `
  mutation DeleteStorageStatistics(
    $input: DeleteStorageStatisticsInput!
    $condition: ModelStorageStatisticsConditionInput
  ) {
    deleteStorageStatistics(input: $input, condition: $condition) {
      id
      timestamp
      fileSize
      s3Key
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storageStatisticsUserId
      __typename
    }
  }
`;
export const createMomentTaggedUsers = /* GraphQL */ `
  mutation CreateMomentTaggedUsers(
    $input: CreateMomentTaggedUsersInput!
    $condition: ModelMomentTaggedUsersConditionInput
  ) {
    createMomentTaggedUsers(input: $input, condition: $condition) {
      id
      momentId
      userId
      moment {
        id
        title
        order
        mediaId
        description
        userId
        taggedUserIds
        taggedUsers {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        timestamp
        storyId
        chapterId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        media {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chapter {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        reportedCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        momentUserId
        momentMediaId
        momentStoryId
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateMomentTaggedUsers = /* GraphQL */ `
  mutation UpdateMomentTaggedUsers(
    $input: UpdateMomentTaggedUsersInput!
    $condition: ModelMomentTaggedUsersConditionInput
  ) {
    updateMomentTaggedUsers(input: $input, condition: $condition) {
      id
      momentId
      userId
      moment {
        id
        title
        order
        mediaId
        description
        userId
        taggedUserIds
        taggedUsers {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        timestamp
        storyId
        chapterId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        media {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chapter {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        reportedCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        momentUserId
        momentMediaId
        momentStoryId
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteMomentTaggedUsers = /* GraphQL */ `
  mutation DeleteMomentTaggedUsers(
    $input: DeleteMomentTaggedUsersInput!
    $condition: ModelMomentTaggedUsersConditionInput
  ) {
    deleteMomentTaggedUsers(input: $input, condition: $condition) {
      id
      momentId
      userId
      moment {
        id
        title
        order
        mediaId
        description
        userId
        taggedUserIds
        taggedUsers {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        timestamp
        storyId
        chapterId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        media {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chapter {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        reportedCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        momentUserId
        momentMediaId
        momentStoryId
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createStoryUsers = /* GraphQL */ `
  mutation CreateStoryUsers(
    $input: CreateStoryUsersInput!
    $condition: ModelStoryUsersConditionInput
  ) {
    createStoryUsers(input: $input, condition: $condition) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateStoryUsers = /* GraphQL */ `
  mutation UpdateStoryUsers(
    $input: UpdateStoryUsersInput!
    $condition: ModelStoryUsersConditionInput
  ) {
    updateStoryUsers(input: $input, condition: $condition) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteStoryUsers = /* GraphQL */ `
  mutation DeleteStoryUsers(
    $input: DeleteStoryUsersInput!
    $condition: ModelStoryUsersConditionInput
  ) {
    deleteStoryUsers(input: $input, condition: $condition) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const createStoryOwners = /* GraphQL */ `
  mutation CreateStoryOwners(
    $input: CreateStoryOwnersInput!
    $condition: ModelStoryOwnersConditionInput
  ) {
    createStoryOwners(input: $input, condition: $condition) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateStoryOwners = /* GraphQL */ `
  mutation UpdateStoryOwners(
    $input: UpdateStoryOwnersInput!
    $condition: ModelStoryOwnersConditionInput
  ) {
    updateStoryOwners(input: $input, condition: $condition) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteStoryOwners = /* GraphQL */ `
  mutation DeleteStoryOwners(
    $input: DeleteStoryOwnersInput!
    $condition: ModelStoryOwnersConditionInput
  ) {
    deleteStoryOwners(input: $input, condition: $condition) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
