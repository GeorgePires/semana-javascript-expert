import {
    describe,
    test,
    expect,
    jest
} from '@jest/globals'
import fs from 'fs'
import FileHelper from '../../src/fileHelper.js'

import Routes from './../../src/routes.js'

describe('#FileHelper', () => {

    describe('#getFileStatus', () => {
        test('it should return files statuses in correct format', async () => {
            const statMock = {
        
                dev: 3584872592,
                mode: 33206,
                nlink: 1,
                uid: 0,
                gid: 0,
                rdev: 0,
                blksize: 4096,
                ino: 2533274790412222,
                size: 128172,
                blocks: 256,
                atimeMs: 1632185809030.2017,
                mtimeMs: 1632086397915.0432,
                ctimeMs: 1632086472493.2295,
                birthtimeMs: 1632086397594.0176,
                atime: '2021-09-21T00:56:49.030Z',
                mtime: '2021-09-19T21:19:57.915Z',
                ctime: '2021-09-19T21:21:12.493Z',
                birthtime: '2021-09-19T21:19:57.594'
              
        }

            const mockUser = 'georgepires'
            process.env.USER = mockUser
            const filename = 'file.png'

            jest.spyOn(fs.promises, fs.promises.readdir.name)
                .mockResolvedValue([filename])
            
            jest.spyOn(fs.promises, fs.promises.stat.name)
                .mockResolvedValue(statMock)
            
            const result = await FileHelper.getFilesStatus("/tmp")

            const expectedResult = [
                {

                    lastModified: statMock.birthtime,
                    owner: mockUser,
                    file: filename
                }
            ]

            expect(fs.promises.stat).toHaveBeenCalledWith(`/tmp/${filename}`)
            expect(result).toMatchObject(expectedResult)
        })
    })
})