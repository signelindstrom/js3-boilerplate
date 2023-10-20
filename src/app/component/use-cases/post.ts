export default function createPost({ logger, access, mkdir, writeFile }) {
    return Object.freeze({ post })

    async function post({params, fileDir, filePath}){
        try {
            await access(filePath)
            await writeFile(filePath, JSON.stringify(params))
            return params;
        } catch (e) {
            await mkdir(fileDir)
            await writeFile(filePath, JSON.stringify(params))
            return params;
        }
    }
}